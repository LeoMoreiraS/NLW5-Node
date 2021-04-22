import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository"

class UserService{
    private userRepository : Repository<User>;
  constructor(){
      this.userRepository = getCustomRepository(UsersRepository);
  }
    async create(email:string){
        
        //Verificar db user existe
        const userExists = await this.userRepository.findOne({
            email
        })
        
        //se existir retornar
        if(userExists){
            return userExists;
        }
        
        //se não criar no db
        const user = this.userRepository.create({
            email
        })

        await this.userRepository.save(user);

        return user;
    }
    async findByEmail(email: string) {
        const user = await this.userRepository.findOne({ email });
      
        return user;
      }

}

export { UserService };