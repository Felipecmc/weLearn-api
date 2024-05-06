import CreateRoomDTO from "../dtos/createRoom";
import Room from "../models/Room";

class RoomService{
    public async create(roomData: any): Promise<Room>{
        
            const newRoom = await Room.create({
                nome: roomData.nome,
                idProfessor: roomData.tokenInfo.id,
            })
            return newRoom;
        
    }

    public async getAllRoomsTeacher(idTeacher: number): Promise<any>{
        try {
            const rooms = await Room.findAll({
                where: {
                    idProfessor: idTeacher
                }
            })

            return rooms
        } catch{
           return Error 
        }
    }

    public async editRoom(roomData: any, idTeacher: any, idRoom:any): Promise<any>{
        try {
            const room = await Room.findByPk(idRoom)

            if(room  && room?.idProfessor == idTeacher){
                room.update({
                    nome: roomData.nome
                })
            }

            return room
        } catch (error) {
         throw new Error()
        }
    }

    public async editRoomStatus(roomData: any, idTeacher: any, idRoom:any): Promise<any>{
        try {
            const room = await Room.findByPk(idRoom)

            if(room  && room?.idProfessor == idTeacher){
                if(room.arquivado === false){
                    room.update({
                    arquivado: true
                    })
                }else{
                    room.update({
                        arquivado: false
                    })
                }
                
            }

            return
        } catch (error) {
         throw new Error()
        }
    }

    public async deleteRoom(id: any, idTeacher:any): Promise<any>{
        try {
            const roomToDelete = await Room.findByPk(id)

            if(roomToDelete && roomToDelete.idProfessor == idTeacher){
                roomToDelete.destroy()
            }
        } catch (error) {
            throw new Error()
        }
    }
}

export default new RoomService()