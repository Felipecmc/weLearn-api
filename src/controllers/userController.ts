import { Request, Response } from 'express';
import UserService from '../services/userService';
import CreateUserDTO from '../dtos/createUserDTO';
import userService from '../services/userService';
import ReturnUserDTO from '../dtos/returnUserDTO';

class UserController {

  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const userData: CreateUserDTO = req.body;

      const newUser = await UserService.createUser(userData);

      const newUserData: ReturnUserDTO = {id: newUser.id, nome: newUser.nome, email: newUser.email, perfil: newUser.perfil}
      res.status(201).json(newUserData);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }

  public async getUser(req: Request, res: Response): Promise<void>{
    try {
      const userId = parseInt(req.params.id);

      const user = await userService.getUser(userId);
      const UserData: ReturnUserDTO = {id: user.id, nome: user.nome, email: user.email, perfil: user.perfil}
      res.status(200).json(UserData
        );
    } catch (error) {
      res.status(404).json({error: 'Usuário não encontrado'})
    }
  } 

  public async editUser(req: Request, res: Response): Promise<void>{
    try {
        const userId = parseInt(req.params.id);
        const editedUserData = req.body;
        
        const editedUser = await userService.editUser(editedUserData, userId)

        res.status(200).json(editedUser)

    } catch (error) {
        res.status(400).json({error: "Erro ao editar as informações do usuário"});
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<void>{
    try {
      const id = parseInt(req.params.id);
      const tokenId = parseInt(req.body.tokenInfo.id);
      const senha = req.body.senha;

      const deleteUser = await userService.deleteUser(id, tokenId, senha);
      res.status(200).json(deleteUser)
    } catch (error) {
      res.status(400).json({error: "Erro ao deletar o usuário"});
    }
  } 

  
}

export default new UserController();
