import Question from "../models/Question";

class QuestionService{
  public async getAllQuestions(idQuestionario: number){

    try {
      const questoes = await Question.findAll({
        where: {
          idQuestionario: idQuestionario
        }
      })

    return questoes

    } catch (error) {
      throw new Error
    }

  }

  public async createQuestion(data: any, idProfessor: number) {
    try {

        const questao = await Question.create({
            idProfessor: idProfessor,
            idQuestionario: data.idQuestionario,
            dica: data.dica,
            enunciado: data.enunciado,
            dificuldade: data.dificuldade,
            alternativaCorreta: data.alternativaCorreta, 
            alternativaA: data.alternativaA,
            alternativaB: data.alternativaB,
            alternativaC: data.alternativaC,
            alternativaD: data.alternativaD,
        });
        return questao;
    } catch (error) {
        throw new Error('Error creating question');
    }
}

  public async editQuestion(data: any, idProfessor: number){

    try {
      const question = await Question.findByPk(data.id)

      if(question?.idProfessor === idProfessor){
      const updated = await question.update({
          dica: data.dica ? data.dica : question.dica,
              enunciado: data.enunciado ? data.enunciado : question.enunciado,
              dificuldade: data.dificuldade ? data.dificuldade : question.dificuldade,
              alternativaCorreta: data.alternativaCorreta ? data.alternativaCorreta : question.alternativaCorreta, 
              alternativaA: data.alternativaA ? data.alternativaA : question.alternativaA,
              alternativaB: data.alternativaB ? data.alternativaB : question.alternativaB,
              alternativaC: data.alternativaC ? data.alternativaC : question.alternativaC,
              alternativaD: data.alternativaD ? data.alternativaD : question.alternativaD,
        })

        return updated
        
      }
    } catch (error) {
      throw new Error
    }
  }

  public async deleteQuestion(idQuestion: any){
    try {
      const deleted = await Question.findByPk(idQuestion)

      if(deleted){
        const del = deleted.destroy()
        return del
      }
    } catch (error) {
      throw new Error
    }
  }
}

export default new QuestionService()