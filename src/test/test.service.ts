import { User, UserDocument } from './schemas/user.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TestService {
  constructor(@InjectModel(User.name) private users: Model<UserDocument>) {}
  findAll() {
    return this.users.find();
  }
}
