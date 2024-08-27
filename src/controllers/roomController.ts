import { Request, Response } from "express";
import RoomService from "../services/roomService"
import CreateRoomDTO from "../dtos/createRoom";

class RoomController{

    public async createRoom(req: Request, res: Response){
        try {
            const roomData: CreateRoomDTO = req.body
            const newRoom = await RoomService.create(roomData)
            
            res.status(201).json(newRoom);

        } catch (error) {
            return res.status(400).json(error)
        }
    }

    public async getAllTeacherRooms(req: Request, res: Response){
        try {
           const  idTeacher = parseInt(req.params.id)
           
           const rooms = await  RoomService.getAllRoomsTeacher(idTeacher)

           res.status(200).json(rooms)

        } catch (error) {
            return res.status(400).json("nao encontramos salas")
        }
    }

    public async getAllRooms(req: Request, res: Response){
        try {
           const userId = parseInt(req.body.tokenInfo.id)
           const rooms = await  RoomService.getAllRooms(userId)

           res.status(200).json(rooms)

        } catch (error) {
            return res.status(400).json("nao encontramos salas")
        }
    }

    public async editRoom(req: Request, res: Response): Promise<void> {
        try {
            const  roomData  = req.body
            const idRoom = req.params.idRoom
            const idTeacher = roomData.tokenInfo.id
            const room = await  RoomService.editRoom(roomData, idTeacher, idRoom);
            res.status(200).json(room);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao editar sala' });
        }
    }

    public async editRoomStatus(req: Request, res: Response): Promise<void> {
        try {
            const  roomData  = req.body
            const idRoom = req.params.idRoom
            const idTeacher = roomData.tokenInfo.id
            const room = await  RoomService.editRoomStatus(roomData, idTeacher, idRoom);
            res.status(200).json({message: "Status da sala alterad!"});
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao editar status da sala' });
        }
    }

    public async deleteRoom(req: Request, res: Response): Promise<void> {
        try {
            const idRoom = req.params.idRoom
            const idTeacher = req.body.tokenInfo.id

            await  RoomService.deleteRoom(idRoom, idTeacher);

            res.status(200).send('Sala excluída com sucesso');
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao excluir sala' });
        }
    }

    public async entryRoom(req: Request, res: Response): Promise<void>{
        try {
            const userId = parseInt(req.body.tokenInfo.id)
            const roomId = req.body.idSala

            const entry = await RoomService.entryRoom(userId, roomId)
            res.status(200).send('Entrou na sala com sucesso');
        } catch (error) {
            res.status(500).json({ message: 'Erro ao entrar na sala' });
        }
    }
}

export default new RoomController()