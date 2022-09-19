import { CreateUserDto } from './dtos/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateUserDto } from 'src/test/dtos/update-user.dto';

@Injectable()
export class TestService {
  constructor(@InjectModel(User.name) private users: Model<UserDocument>) {}
  
  findAll() {
    return this.users.find();
  }
  
  findById(id: string) {
    return this.users.findById(id);
  }

  create(user: CreateUserDto): Promise<User> {
    return this.users.create(user);
  }

  update(id: string, user: UpdateUserDto) {
    return this.users.findByIdAndUpdate(id, user);
  }
}
