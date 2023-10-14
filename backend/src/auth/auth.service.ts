import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.schema';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async validateUser(credentials: LoginDto): Promise<User> {
    try {
      
      const user = await this.usersService.findOne(credentials.email);
      console.log(user);
      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      if (user.password === credentials.password) {
        return user;
      } else {
        throw new UnauthorizedException('Invalid credentials');
      }
    } catch (error: any) {
      console.error('Error during user validation:', error);
      throw new UnauthorizedException(error.message);
    }
  }

  async login(credentials: LoginDto) {
    const user = await this.validateUser(credentials);
    console.log(user);
    if (user) {
      const payload = { username: user.username };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
  }
}
