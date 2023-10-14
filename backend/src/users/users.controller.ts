import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {

  }

  @Post('/create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    const result = await this.usersService.createUser(createUserDto);
    return result;
  }
}
