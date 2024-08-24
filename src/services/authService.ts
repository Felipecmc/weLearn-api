// services/AuthService.ts
import jwt from 'jsonwebtoken';
import User  from '../models/User';
import { NextFunction, Request, Response } from 'express';

require('dotenv').config();

class AuthService {
  static async generateToken(user: User): Promise<string> {
    const payload = {
      id: user.id,
      nome: user.nome,
      email: user.email,
    };

    return jwt.sign(payload, process.env.PASSWORD_HASH_KEY as string, { expiresIn: '5000ms' });
  }

  static async verifyToken(token: string): Promise<any> {
    return jwt.verify(token, process.env.PASSWORD_HASH_KEY as string);
  }

  static async protectedRoute(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = req.headers.authorization?.split(' ')[1];

      if (!token) {
        res.status(401).json({ error: 'Token não fornecido' });
        return;
      }

      const decoded = await AuthService.verifyToken(token);

      if (!decoded) {
        res.status(401).json({ error: 'Token inválido' });
        return;
      }

      req.body.tokenInfo = decoded;
      next();
    } catch (error) {
      console.error('Erro na verificação do token:', error);
      res.status(500).json({ error: 'Erro na verificação do token' });
    }
  }
}

export default AuthService;
