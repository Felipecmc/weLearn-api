import { error } from 'console';
import CreateUserDTO from '../dtos/createUserDTO';
import EditUserDTO from '../dtos/editUserDTO';
import User from '../models/User';

class UserService {

  public async createUser(userData: CreateUserDTO): Promise<User> {
    try {
      const hashedPassword = await User.generateHash(userData.senha);
      // Cria um novo usuário com os dados recebidos do DTO
      const newUser = await User.create({
        nome: userData.nome,
        email: userData.email,
        perfil: userData.perfil,
        senha: hashedPassword,
      });

      return newUser;
      
    } catch (error) {
      throw new Error('Erro ao criar usuário');
    }
  }

  public async getUser(id: number){
      const user = await User.findByPk(id)
      if (user){
        user.senha = "*********"
        return user;
      }else{
        throw new Error();
      }
  }

  public async editUser(userData: EditUserDTO, id: number){
    try {
      const user = await User.findByPk(id)
   
      if(user){
        const editedUser = await user.update({nome: userData.nome, email: userData.email});
        const newData : EditUserDTO = {nome: editedUser.nome, email: editedUser.email}
        return newData;
      }

    }catch (error) {
      throw new Error('Erro ao criar usuário');
    } 
  }

  public async deleteUser(id: number, tokenId: number, senha: string){
    const user = await User.findByPk(id);

    if (!user || !(await User.compareHash(senha, user.senha))) {
      throw new Error();
    }

    if(id === tokenId && user){
      user.destroy()
      return;
    }else{
      throw new Error("Erro ao deletar Usuário");
    }
  }
}

export default new UserService();