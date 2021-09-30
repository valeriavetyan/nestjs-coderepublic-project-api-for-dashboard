import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ApiDocument = Api & Document;

@Schema()
export class Api {
  @Prop({ required: true })
  author: string;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  content: string;
}

export const ApiSchema = SchemaFactory.createForClass(Api);
