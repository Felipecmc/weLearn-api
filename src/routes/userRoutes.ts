import express from 'express';
import userController from '../controllers/userController';
import AuthService from '../services/authService';
import AuthController from '../controllers/authController';

const userRoutes = express.Router();

userRoutes.post('/', userController.createUser);
userRoutes.get('/:id', AuthService.protectedRoute, userController.getUser)
userRoutes.put("/:id", AuthService.protectedRoute, userController.editUser)
userRoutes.delete("/:id", AuthService.protectedRoute, userController.deleteUser)
userRoutes.post('/auth', AuthController.authenticate)

export default userRoutes;
