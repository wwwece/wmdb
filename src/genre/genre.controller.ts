import { Controller, Get, Delete, Body, Post } from '@nestjs/common';
import { GenreService } from './genre.service';
import { Genre } from './genre.entity';

@Controller('genres')
export class GenreController {
  constructor(private genreService: GenreService) {}

  @Get()
  async findAll(): Promise<Genre[]> {
    return await this.genreService.findAll();
  }

  @Post()
  async create(@Body() genre: Genre): Promise<Genre> {
    return await this.genreService.create(genre);
  }

  @Delete()
  async remove(@Body() genre: Genre) {
    try {
      return (await this.genreService.remove(genre)).affected > 0;
    } catch (QueryFailedError) {
      return false;
    }
  }
}
