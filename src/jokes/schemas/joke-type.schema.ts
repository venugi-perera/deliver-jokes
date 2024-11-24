import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'jokes_types' })
export class JokeType extends Document {
  @Prop({ required: true })
  type: string;
}

export const JokeTypeSchema = SchemaFactory.createForClass(JokeType);
