// services/AuthService.ts
import jwt from 'jsonwebtoken';
import User  from '../models/User';
import { NextFunction, Request, Response } from 'express';

class AuthService {
  static async generateToken(user: User): Promise<string> {
    const payload = {
      id: user.id,
      nome: user.nome,
      email: user.email,
    };

    return jwt.sign(payload, 'your_secret_key', { expiresIn: '1h' });
  }

  static async verifyToken(token: string): Promise<any> {
    return jwt.verify(token, 'your_secret_key');
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

      req.body.user = decoded;
      next();
    } catch (error) {
      console.error('Erro na verificação do token:', error);
      res.status(500).json({ error: 'Erro na verificação do token' });
    }
  }
}

export default AuthService;
