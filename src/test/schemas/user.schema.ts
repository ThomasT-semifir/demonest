import { ObjectId, Document } from 'mongoose';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  _id: ObjectId;
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
