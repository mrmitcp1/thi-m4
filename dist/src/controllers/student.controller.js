"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const class_schema_1 = require("../models/schemas/class.schema");
const student_schema_1 = require("../models/schemas/student.schema");
class StudentController {
    static async getCreateStudent(req, res) {
        const classOfStudent = await class_schema_1.classModel.find();
        res.render('create', { classOfStudent });
    }
    static async createStudent(req, res) {
        try {
            const student = new student_schema_1.studentModel(req.body);
            if (student) {
                await student.save();
                res.redirect('/');
            }
            else
                res.render("404");
        }
        catch (e) {
            res.render('404');
        }
    }
    static async getListStudent(req, res) {
        try {
            let query = {};
            if (req.body.class) {
                query = { class: req.body.class };
            }
            let classes = await class_schema_1.classModel.find();
            const student = await student_schema_1.studentModel.find(query).populate({ path: 'class', select: 'name' }).sort({ theoreticalPoint: 1 });
            res.render('list', { student, classes });
        }
        catch (e) {
            res.render('404');
        }
    }
    static async getUpdateStudent(req, res) {
        try {
            const classes = await class_schema_1.classModel.find();
            const student = await student_schema_1.studentModel.findOne({ _id: req.params.id }).populate({ path: 'class', select: 'name' });
            if (student) {
                res.render('update', { student, classes });
            }
            else
                res.render("404");
        }
        catch (e) {
            res.render('404');
        }
    }
    static async updateStudent(req, res) {
        try {
            const { name, theoreticalPoint, practicePoint, description, evaluated, className } = req.body;
            const student = await student_schema_1.studentModel.findOne({ _id: req.params.id });
            student.name = name;
            student.theoreticalPoint = theoreticalPoint;
            student.practicePoint = practicePoint;
            student.description = description;
            student.evaluated = evaluated;
            student.class = className;
            student.save();
            res.redirect('/');
        }
        catch (e) {
            res.render('404');
        }
    }
    static async deleteStudent(req, res) {
        await student_schema_1.studentModel.deleteOne({ _id: req.params.id });
        res.redirect('/');
    }
}
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map