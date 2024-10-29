import express from 'express';
import AuthService from '../services/authService';
import QuestionaryController from '../controllers/questionaryController';
import QuestionController from '../controllers/questionController';

const questionaryRoutes = express.Router()

questionaryRoutes.post("/", AuthService.protectedRoute, QuestionaryController.createQuestionary)
questionaryRoutes.put("/edit", AuthService.protectedRoute, QuestionaryController.editQuestionary)
questionaryRoutes.delete("/delete/:id", AuthService.protectedRoute, QuestionaryController.deleteQuestionary)
questionaryRoutes.get("/:idRoom", AuthService.protectedRoute, QuestionaryController.getAllRoomQuestionaries)
questionaryRoutes.get("/questions/:idQuestionario", AuthService.protectedRoute, QuestionController.getQuestions)
questionaryRoutes.post("/questions", AuthService.protectedRoute, QuestionController.createQuestion)
questionaryRoutes.put("/questions", AuthService.protectedRoute, QuestionController.updateQuestion)
questionaryRoutes.delete("/questions/:id", AuthService.protectedRoute, QuestionController.deleteQuestion)
questionaryRoutes.post("/questions/answer", AuthService.protectedRoute, QuestionController.response)

export default questionaryRoutes