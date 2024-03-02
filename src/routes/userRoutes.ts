import express from 'express';
import userController from '../controllers/userController';

const userRoutes = express.Router();

// Rota para criar um novo usuário
userRoutes.post('/', userController.createUser);

export default userRoutes;
