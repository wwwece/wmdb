import { Controller, Get, Post, Body } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './movie.entity';

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Post()
  create(@Body() movie: Movie) {
    this.movieService.create(movie);
  }
}
