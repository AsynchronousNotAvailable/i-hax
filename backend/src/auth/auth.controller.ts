import { Body, ConflictException, Controller, HttpStatus, NotFoundException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
    
  }

  @Post('/login')
  async login(@Body() credentials: LoginDto) {
    try {
      const user = await this.authService.login(credentials);

      return {
        message: 'Login successful',
        access_token: user.access_token
      };
    } catch (error) {
      console.log(error);
      if (error instanceof NotFoundException) {
        throw new NotFoundException({
          message: error.message,
          statusCode: HttpStatus.NOT_FOUND
        });
      } else if (error instanceof ConflictException) {
        throw new ConflictException({
          message: error.message,
          statusCode: HttpStatus.CONFLICT
        });
      } else {
        // Include the error message in the response
        return {
          message: 'Login failed. Invalid credentials',
          error: error // Include the specific error message
        };
      }
    }
  }
}
