import CreateUserDTO from '../dtos/createUserDTO';
import User from '../models/User';
import PasswordUtils from '../utils/PasswordUtils';

class UserService {

  public async createUser(userData: CreateUserDTO): Promise<User> {
    try {
      console.log(userData)
      const hashedPassword = await PasswordUtils.hashPassword(userData.senha);
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
}

export default new UserService();