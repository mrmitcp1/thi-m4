"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRouters = void 0;
const express_1 = require("express");
const student_controller_1 = require("../controllers/student.controller");
exports.studentRouters = (0, express_1.Router)();
exports.studentRouters.get('/create', student_controller_1.StudentController.getCreateStudent);
exports.studentRouters.post('/create', student_controller_1.StudentController.createStudent);
exports.studentRouters.get('/', student_controller_1.StudentController.getListStudent);
exports.studentRouters.post('/', student_controller_1.StudentController.getListStudent);
exports.studentRouters.get('/:id/update', student_controller_1.StudentController.getUpdateStudent);
exports.studentRouters.post('/:id/update', student_controller_1.StudentController.updateStudent);
exports.studentRouters.get('/:id/delete', student_controller_1.StudentController.deleteStudent);
//# sourceMappingURL=student.routers.js.map