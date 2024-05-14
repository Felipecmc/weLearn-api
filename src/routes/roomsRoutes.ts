import express from 'express';
import AuthService from '../services/authService';
import RoomController from '../controllers/roomController';

const roomRoutes = express.Router()

roomRoutes.post("/", AuthService.protectedRoute, RoomController.createRoom)
roomRoutes.get("/", AuthService.protectedRoute, RoomController.getAllRooms)
roomRoutes.get("/:id", AuthService.protectedRoute, RoomController.getAllTeacherRooms)
roomRoutes.put("/:idRoom", AuthService.protectedRoute, RoomController.editRoom)
roomRoutes.get("/status/:idRoom", AuthService.protectedRoute, RoomController.editRoomStatus)
roomRoutes.delete("/:idroom", AuthService.protectedRoute, RoomController.deleteRoom)

export default roomRoutes;