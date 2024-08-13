// controllers/AuthController.ts
import { NextFunction, Request, Response } from 'express';
import  User  from '../models/User';
import AuthService from '../services/authService';

class AuthController {
  static async authenticate(req: Request, res: Response): Promise<void> {
    try {
      const { email, senha } = req.body;

      console.log('bateu aqui')

      const user = await User.findOne({ where: { email } });

      if (!user || !(await User.compareHash(senha, user.senha))) {
        res.status(401).json({ error: 'Credenciais inválidas' });
        return;
      }


      const token = await AuthService.generateToken(user);
      const userToSend = {nome: user.nome, email: user.email, xp: user.xp, perfil: user.perfil, weCoin: user.weCoin, elo : user.elo, token }

      res.status(200).json({ ...userToSend });
    } catch (error) {
      console.error('Erro na autenticação:', error);
      res.status(500).json({ error: 'Erro na autenticação' });
    }
  }
}

export default AuthController;
