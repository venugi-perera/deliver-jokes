// src/jokes/jokes.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JokesController } from './jokes.controller';
import { JokesService } from './jokes.service';
import { JokeType, JokeTypeSchema } from './schemas/joke-type.schema';
import { Joke, JokeSchema } from './schemas/joke.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Joke.name, schema: JokeSchema },
      { name: JokeType.name, schema: JokeTypeSchema },
    ]),
  ],
  controllers: [JokesController],
  providers: [JokesService],
})
export class JokesModule {}
