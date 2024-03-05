import { IntegerDataType } from 'sequelize';
import CreateUserDTO from '../dtos/createUserDTO';
import EditUserDTO from '../dtos/editUserDTO';
import User from '../models/User';
import PasswordUtils from '../utils/PasswordUtils';

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
      console.error('Erro ao criar usuário:', error);
      throw new Error('Erro ao criar usuário');
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
}

export default new UserService();