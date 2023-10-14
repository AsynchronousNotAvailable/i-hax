import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthModule } from './passport/jwt.module';
import { JwtStrategy } from './passport/jwt.strategy';
import { UsersService } from 'src/users/users.service';

@Module({
  imports:[JwtModule.register({
    secret: 'secret', // Replace with your secret key
    signOptions: { expiresIn: '1h' },
  }), UsersModule],
  controllers: [AuthController],
  providers: [JwtAuthModule, AuthService, JwtStrategy],
})
export class AuthModule {}
