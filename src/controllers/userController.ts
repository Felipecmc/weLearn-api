import { Request, Response } from 'express';
import UserService from '../services/userService';
import CreateUserDTO from '../dtos/createUserDTO';
import userService from '../services/userService';

class UserController {

  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const userData: CreateUserDTO = req.body;

      const newUser = await UserService.createUser(userData);
      const newUserData = {id: newUser.id, nome: newUser.nome, email: newUser.email, perfil: newUser.perfil}
      res.status(201).json(newUserData);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }

  public async editUser(req: Request, res: Response){
    try {
        const userId = parseInt(req.params.id);
        const editedUserData = req.body;
        
        const editedUser = await userService.editUser(editedUserData, userId)

        return res.status(200).json(editedUser)

    } catch (error) {
        return res.status(400).json({error: "erro ao editar as informações do usuário"});
    }
  }
}

export default new UserController();
