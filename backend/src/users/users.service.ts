import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './users.schema';
import { CreateUserDto } from './dto/create-user-dto';
import { University } from 'src/common/university.enums';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}
  async findOne(email: string): Promise<User> {
    return await this.userModel.findOne({ email });
  }

  async createUser(createUserDto: CreateUserDto) {
   
    if (await this.isEmailExist(createUserDto.email)) {
      throw new ConflictException('Email already exists');
    }

    if (await this.isUsernameExist(createUserDto.username)) {
      throw new ConflictException('Username already exists');
    }

    const newUser = await this.userModel.create({
      _id: new mongoose.Types.ObjectId(),
      ...createUserDto,
      
    });
    return newUser.save();
  }

  async isEmailExist(email: string) {
    console.log(email);
    const user = await this.userModel.findOne({ email: email });
    console.log("user", user);
    if (user === null) {
      return false;
      
    } else {
      console.log(user);
      return true;
    }
  }

  async isUsernameExist(username: string) {
    const user = await this.userModel.findOne({ username: username });
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  async checkUniversity(email: string) {
    const [_, domain] = email.split('@');
    for (const uni in University) {
      if (University[uni] === domain) {
        return uni;
      }
    }
    console.log('yes');
    return null;
  }
}
