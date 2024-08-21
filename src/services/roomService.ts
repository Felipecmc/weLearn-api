import CreateRoomDTO from "../dtos/createRoom";
import Room from "../models/Room";
import RoomUser from "../models/RoomUser";
import User from "../models/User";

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

    public async getAllRooms(id: number): Promise<any>{
        
        try {
            const user = await User.findByPk(id)

            if(user.perfil == "Professor"){
                const rooms = await Room.findAll({
                    where: {
                        idProfessor: id
                    }
                })
    
                return rooms
            }else{
                const roomsArray = []
                const userRooms = RoomUser.findAll({
                    where: {
                        idAluno: id
                    }
                })

                if(userRooms.length > 0){
                    for(let i =0; i < userRooms.length; i++){
                        const room = Rooms.find({
                            where: {
                               id: userRooms[i].idSala
                            }
                        })

                        const professor = await User.findByPk(room.idProfessor);

                        const random = Math.floor(Math.random() + 10 + 1) * 10

                        const roomToReturn = {
                            id: room.id,
                            nomeSala: room.nome,
                            nomeProfessor: professor.nome,
                            percentualConcluido: random,
                            elo: userRooms.elo;
                        }

                        roomsArray.push(roomToReturn)
                    }

                    return roomsArray;
                }
            }
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

    public async entryRoom(idStudent: number, idRoom: number): Promise<any>{
        try {
            const entryRoom = await RoomUser.create({
                idAluno: idStudent,
                idSala: idRoom
            })
            return entryRoom
        } catch (error) {
           throw new Error
        }
    }
}

export default new RoomService()