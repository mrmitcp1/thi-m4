import {Schema, model} from "mongoose";
interface iStudent {
    name : string;
    theoreticalPoint : number;
    practicePoint: number;
    description: string;
    evaluated: string;
    class: Object;
}
const studentSchema = new Schema <iStudent> ({
    name: String,
    theoreticalPoint: Number,
    practicePoint: Number,
    description: String,
    evaluated: String,
    class: {type: Schema.Types.ObjectId, ref:'class'},
})
export const studentModel = model("student",studentSchema);