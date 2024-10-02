import { Request, Response } from "express";
import QuestionService from "../services/questionService";

class QuestionController{
  public async getQuestions(req: Request, res: Response){
    try {
      const idQuestionario = parseInt(req.params.idQuestionario)
      const questoes = await QuestionService.getAllQuestions(idQuestionario)

      return res.status(200).json(questoes)
    } catch (error) {
      return res.status(400).json("Ainda não existem questões para esse questiionário!")
    }
  }

  public async createQuestion(req: Request, res: Response){
    try {
      const data = req.body
      const idProfessor = parseInt(req.body.tokenInfo.id)
  
      const questao =  await QuestionService.createQuestion(data, idProfessor)
  
      return res.status(200).json(questao)
    } catch (error) {
      return res.status(400).json("não foi possivel criar a questão")
    }
  }

  public async updateQuestion(req: Request, res: Response){
    try {
      const data = req.body
      const idProfessor = parseInt(req.body.tokenInfo.id)
  
      const question = await QuestionService.editQuestion(data, idProfessor)
  
      return res.status(200).json(question)
    } catch (error) {
      return res.status(400).json("erro ao atualiar a questão")
    }
  }

  public async deleteQuestion(req: Request, res: Response){
    try {
      const id = parseInt(req.params.id)

      const deleted = await QuestionService.deleteQuestion(id)

      return res.status(200)

    } catch (error) {
      return res.status(400).json("erro ao deletar a questão")
    }
  }
}

export default new QuestionController()