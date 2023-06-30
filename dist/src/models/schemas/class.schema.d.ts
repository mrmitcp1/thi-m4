/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Schema } from "mongoose";
interface iClass {
    name: string;
}
export declare const classModel: import("mongoose").Model<iClass, {}, {}, {}, import("mongoose").Document<unknown, {}, iClass> & Omit<iClass & {
    _id: import("mongoose").Types.ObjectId;
}, never>, Schema<iClass, import("mongoose").Model<iClass, any, any, any, import("mongoose").Document<unknown, any, iClass> & Omit<iClass & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, iClass, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<iClass>> & Omit<import("mongoose").FlatRecord<iClass> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>>;
export {};
