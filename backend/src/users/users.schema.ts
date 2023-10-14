import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { University } from 'src/common/university.enums';


@Schema()
export class User extends Document{
    @Prop({ required: true })
    _id: Types.ObjectId;

    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    full_name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    phoneNumber: string;

    @Prop()
    university: University;


}
export const UserSchema = SchemaFactory.createForClass(User);
