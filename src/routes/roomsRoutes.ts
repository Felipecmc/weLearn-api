import express from 'express';
import AuthService from '../services/authService';
import RoomController from '../controllers/roomController';

const roomRoutes = express.Router()

roomRoutes.post("/", AuthService.protectedRoute, RoomController.createRoom)
roomRoutes.get("/:id", AuthService.protectedRoute, RoomController.getAllTeacherRooms)
roomRoutes.put("/:idTeacher/:idRoom", AuthService.protectedRoute, RoomController.editRoom)
roomRoutes.get("/:idTeacher/:idRoom", AuthService.protectedRoute, RoomController.editRoomStatus)
roomRoutes.delete("/:idTeacher/:idroom", AuthService.protectedRoute, RoomController.deleteRoom)

export default roomRoutes;