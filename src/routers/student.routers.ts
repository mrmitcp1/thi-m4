import {Router} from "express";
import {StudentController} from "../controllers/student.controller";

export const studentRouters = Router()

studentRouters.get('/create',StudentController.getCreateStudent);
studentRouters.post('/create',StudentController.createStudent);
studentRouters.get('/',StudentController.getListStudent);
studentRouters.post('/',StudentController.getListStudent);
studentRouters.get('/:id/update',StudentController.getUpdateStudent)
studentRouters.post('/:id/update',StudentController.updateStudent)
studentRouters.get('/:id/delete',StudentController.deleteStudent)
