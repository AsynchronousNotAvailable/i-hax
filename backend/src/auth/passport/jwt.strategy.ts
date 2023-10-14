import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service'; // Your UsersService import
import { JwtPayload } from '../interfaces/jwt-payload.interface';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret', // Replace with your secret key
    });
  }

  async validate(payload: JwtPayload) {
    // console.log(payload);
    // const user = await this.usersService.findOne(payload.username);
    //   if (!user) {
        
    //   throw new UnauthorizedException();
    // }
    // return user;
  }
}
