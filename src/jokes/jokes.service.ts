// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Joke } from './schemas/joke.schema';

// @Injectable()
// export class JokesService {
//   constructor(@InjectModel(Joke.name) private jokeModel: Model<Joke>) {}

//   async getRandomJoke(type: string): Promise<Joke> {
//     // Aggregate query to find a random joke based on the provided 'type'
//     const [randomJoke] = (await this.jokeModel.aggregate([
//       { $match: { type } }, // Filter jokes by the selected type
//       { $sample: { size: 1 } }, // Randomly select one joke
//     ])) as Joke[];

//     // If no jokes are found for the type, throw an error
//     if (!randomJoke) {
//       throw new Error('No jokes found for the specified type');
//     }

//     return randomJoke;
//   }

//   async getJokeTypes(): Promise<string[]> {
//     return this.jokeModel.distinct('type') as Promise<string[]>;
//   }
// }

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JokeType } from './schemas/joke-type.schema';
import { Joke } from './schemas/joke.schema';

@Injectable()
export class JokesService {
  constructor(
    @InjectModel(Joke.name) private jokeModel: Model<Joke>,
    @InjectModel(JokeType.name) private jokeTypeModel: Model<JokeType>,
  ) {}

  async getRandomJoke(type: string): Promise<Joke> {
    const [randomJoke] = (await this.jokeModel.aggregate([
      { $match: { type } }, // Filter jokes by the selected type
      { $sample: { size: 1 } }, // Randomly select one joke
    ])) as Joke[];

    if (!randomJoke) {
      throw new Error('No jokes found for the specified type');
    }

    return randomJoke;
  }

  async getJokeTypes(): Promise<string[]> {
    const types = await this.jokeTypeModel.find({});

    return types.map((typeDoc) => typeDoc.type);
  }
}
