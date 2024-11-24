// // src/app.module.ts
// import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';
// import { JokesModule } from './jokes/jokes.module';

// @Module({
//   imports: [
//     ConfigModule.forRoot(),
//     MongooseModule.forRoot(process.env.MONGO_URI),
//     JokesModule,
//   ],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JokesModule } from './jokes/jokes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    JokesModule,
  ],
  // imports: [
  //   MongooseModule.forFeature([
  //     { name: Joke.name, schema: JokeSchema },
  //     { name: JokeType.name, schema: JokeTypeSchema },
  //   ]),
  // ],
  // providers: [JokesService],
  // exports: [JokesService],
})
export class AppModule {}
