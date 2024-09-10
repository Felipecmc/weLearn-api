import Questionary from "../models/Questionary"
import User from "../models/User";

class QuestionaryService{
    public async create(idProfessor: number, data: any){
        try {
            const user = await User.findByPk(idProfessor)

            if(user && user.perfil == "Professor"){
                const questionary = Questionary.create({
                    nome: data.nome,
                    idSala: data.idSala,
                    idProfessor: idProfessor
                })
                return questionary
            }
        } catch (error) {
            throw new Error('Erro ao criar questionário');
        }
    }

    public async getAllRoomQuestionaries(idSala: number){
        try {
            const questionaries = await Questionary.findAll({
                where: {
                    idSala: idSala
                }
            })

            return questionaries
        } catch (error) {
            throw new Error
        }
        
    }
    
    public async edit(idProfessor: number, data: any){
        
        const questionary = await Questionary.findByPk(data.id)

        if(idProfessor == questionary?.idProfessor){
            const edit = questionary?.update({
                nome: data.nome
            })

            return edit
        }else{
            throw new Error
        }

        return questionary
    }

    public async delete(id: number, idProfessor: number){
        

        try {
            const questionary = await Questionary.findByPk(id)

            if(idProfessor == questionary?.idProfessor){
                questionary.destroy()
            }

            return 
        } catch (error) {
            throw new Error
        }
    }
}

export default new QuestionaryService()