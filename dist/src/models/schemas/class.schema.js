"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classModel = void 0;
const mongoose_1 = require("mongoose");
const classSchema = new mongoose_1.Schema({
    name: String,
});
exports.classModel = (0, mongoose_1.model)("class", classSchema);
//# sourceMappingURL=class.schema.js.map