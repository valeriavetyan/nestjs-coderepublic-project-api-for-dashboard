import { Document } from 'mongoose';
export declare type ApiDocument = Api & Document;
export declare class Api {
    author: string;
    title: string;
    content: string;
}
export declare const ApiSchema: import("mongoose").Schema<Document<Api, any, any>, import("mongoose").Model<Document<Api, any, any>, any, any, any>, {}>;
