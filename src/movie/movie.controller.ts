import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './movie.entity';

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  async findAll(): Promise<Movie[]> {
    return await this.movieService.findAll();
  }

  @Post()
  async create(@Body() movie: Movie) {
    return await this.movieService.create(movie);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() movie: Movie) {
    return (await this.movieService.update(id, movie)).affected > 0;
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return (await (await this.movieService.remove(id)).affected) > 0;
  }
}
