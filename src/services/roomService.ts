import CreateRoomDTO from "../dtos/createRoom";
import Room from "../models/Room";
import RoomUser from "../models/RoomUser";
import User from "../models/User";

class RoomService{
    public async create(roomData: any): Promise<Room>{

        const user = await User.findByPk(roomData.tokenInfo.id)

        if(user && user.perfil == "Professor"){
            const newRoom = await Room.create({
                nome: roomData.nome,
                idProfessor: roomData.tokenInfo.id,
            })
            return newRoom;
        }else{
            throw new Error
        }
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

    public async getAllRooms(idUser: number): Promise<any>{
        try {
            const user = await User.findByPk(idUser)
            const roomsToReturn = []
            if(user && user.perfil == "Professor"){
                const rooms = await Room.findAll({
                    where: {
                        idProfessor: idUser
                    }
                })

                if(rooms){
                    for(let i = 0;i < rooms.length; i++ ){
                        const teacherRoom = {
                            id: rooms[i].id,
                            nomeSala: rooms[i].nome,
                            nomeProfessor: user.nome,
                        }

                        roomsToReturn.push(teacherRoom)
                    }
                }
            }else{
                const userRooms = await RoomUser.findAll({
                    where: {
                        idAluno: idUser
                    }
                })

                if(userRooms && userRooms.length > 0){
                    for(let i =0; i < userRooms.length; i++){
                        const room = await Room.findOne({
                            where: {
                               id: userRooms[i].idSala
                            }
                        })
                        if(room){
                        const professor = await User.findByPk(room.idProfessor);
                            if(professor){
                                const random = Math.floor(Math.random() * 101);

                                const roomToReturn = {
                                    id: room.id,
                                    nomeSala: room.nome,
                                    nomeProfessor: professor.nome,
                                    percentualConcluido: random,
                                    elo: userRooms[i].elo
                                }
        
                                roomsToReturn.push(roomToReturn)
                            }
                        }  
                    }
                }
            }
            
            return roomsToReturn;
        } catch{
           throw new Error 
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
            const userIsAlreadyIn = await RoomUser.findOne({
               where : {
                idAluno: idStudent,
                idSala: idRoom
               } 
            })

            if(userIsAlreadyIn){
                throw new Error
            }
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