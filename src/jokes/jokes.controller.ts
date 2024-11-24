// src/jokes/jokes.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { JokesService } from './jokes.service';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  // @Get('random')
  // async getRandomJoke() {
  //   return this.jokesService.getRandomJoke();
  // }

  @Get('random/:type')
  async getRandomJoke(@Param('type') type: string) {
    return this.jokesService.getRandomJoke(type);
  }

  @Get('types')
  async getJokeTypes() {
    return this.jokesService.getJokeTypes();
  }
}
