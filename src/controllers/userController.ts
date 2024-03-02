import { Request, Response } from 'express';
import UserService from '../services/userService';
import CreateUserDTO from '../dtos/createUserDTO';

class UserController {

  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const userData: CreateUserDTO = req.body;

      const newUser = await UserService.createUser(userData);

      res.status(201).json("usuario criado");
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }
}

export default new UserController();
