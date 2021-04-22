import { User } from "../entities/User";
import { io } from "../http";
import { ConnectionService } from "../services/ConnectionsService"
import { UserService } from "../services/UserService"
import { MessagesService } from "../services/MessagesService"
interface IParams{
    text:string;
    email:string;
}

io.on("connect",(socket)=>{
    const connectionService = new ConnectionService();
    const messageService = new MessagesService();
    const userService = new UserService();

    socket.on("client_first_access", async params=>{
        console.log(params);

        const socket_id = socket.id;
        const {text,email}=params as IParams;
        let user_id = null;

        const userExists = await userService.findByEmail(email);

        if(!userExists){
            const user = await userService.create(email);
            await connectionService.create({
                socket_id,
                user_id:user.id,
            });
            user_id = user.id;
        }else{
            const connection = await connectionService.findByUserId(userExists.id);
            user_id=userExists.id;

            if(!connection){
                await connectionService.create({
                    socket_id,
                    user_id:userExists.id,
                })
            }else{
                connection.socket_id = socket_id;
                await connectionService.create(connection);
            }

            
         }   

         await messageService.create({
             text,
             user_id,
         })
        
    })
});