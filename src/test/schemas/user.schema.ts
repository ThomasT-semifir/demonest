import { ObjectId, Document } from 'mongoose';
import { SchemaFactory, Schema } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  _id: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
