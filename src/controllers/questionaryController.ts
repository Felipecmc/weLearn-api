import { Request, Response } from "express";
import QuestionaryService from "../services/questionaryService";

class QuestionaryController{
    public async createQuestionary(req: Request, res: Response){
        try {
            const idProfessor = parseInt(req.body.tokenInfo.id)
            const data = req.body

            const create = await QuestionaryService.create(idProfessor, data)
            return res.json(create).status(200)
        } catch (error) {
            return res.json("Erro ao criar questionário").status(400)
        }
    }

    public async editQuestionary(req: Request, res: Response){
    
        try {
            const idProfessor = parseInt(req.body.tokenInfo.id)
            const data = req.body

            const edit = await QuestionaryService.edit(idProfessor, data)
            return res.json(edit).status(200)
        } catch (error) {
            return res.json("erro ao editar questionário")
        }

    }

    public async getAllRoomQuestionaries(req: Request, res: Response){
        try {
            const data = parseInt(req.params.idRoom)

            const questionaries = await QuestionaryService.getAllRoomQuestionaries(data)
            return res.json(questionaries).status(200)
        } catch (error) {
            return res.json("Erro ao recuperar questionário").status(400)
        }
    }

    public async deleteQuestionary(req: Request, res: Response){
        try {
            const id = parseInt(req.params.id)
            const idProfessor = parseInt(req.body.tokenInfo.id)

            const deleteQuestionary = await QuestionaryService.delete(id, idProfessor)

            return res.json(deleteQuestionary).status(200)
        } catch (error) {
            return res.json("Erro ao deletar questionário").status(400)
        }
    }

}

export default new QuestionaryController()