import { Body, ConflictException, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {

  }

  @Post('/create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    // console.log(createUserDto);
    // const result = await this.usersService.createUser(createUserDto);
    // return result;
    try {
      const user = await this.usersService.createUser(createUserDto);
      if (user) {
        return {success: true, message: "Sign Up Successful"}
      }
    }
    catch(error){
      if (error instanceof ConflictException) {
        // Handle conflict errors (email or username already exists)
        return { success: false, message: error.message };
      } else {
        // Handle other unexpected errors
        return { success: false, message: 'An error occurred' };
      }
    }
  }
}
