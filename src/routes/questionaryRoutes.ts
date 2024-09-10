import express from 'express';
import AuthService from '../services/authService';
import QuestionaryController from '../controllers/questionaryController';

const questionaryRoutes = express.Router()

questionaryRoutes.post("/", AuthService.protectedRoute, QuestionaryController.createQuestionary)
questionaryRoutes.put("/edit", AuthService.protectedRoute, QuestionaryController.editQuestionary)
questionaryRoutes.delete("/delete/:id", AuthService.protectedRoute, QuestionaryController.deleteQuestionary)
questionaryRoutes.get("/:idRoom", AuthService.protectedRoute, QuestionaryController.getAllRoomQuestionaries)

export default questionaryRoutes