"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentModel = void 0;
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    name: String,
    theoreticalPoint: Number,
    practicePoint: Number,
    description: String,
    evaluated: String,
    class: { type: mongoose_1.Schema.Types.ObjectId, ref: 'class' },
});
exports.studentModel = (0, mongoose_1.model)("student", studentSchema);
//# sourceMappingURL=student.schema.js.map