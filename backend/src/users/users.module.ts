import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule, getConnectionToken, getModelToken } from '@nestjs/mongoose';
import { User, UserSchema } from './users.schema';
import { Connection } from 'mongoose';

@Module({
  imports: [MongooseModule.forFeature([
    {name: User.name, schema: UserSchema}
  ])],
  controllers: [UsersController],
  providers: [UsersService, {
    provide: getModelToken(User.name),
    useFactory: (connection: Connection) =>
      connection.model(User.name, UserSchema),
    inject: [getConnectionToken()]
  }],
  exports: [UsersService]
})
export class UsersModule {}
