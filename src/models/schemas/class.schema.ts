import {Schema, model} from "mongoose";
interface iClass {
    name : string;
}
const classSchema = new Schema <iClass> ({
    name: String,
})
export const classModel = model("class",classSchema);