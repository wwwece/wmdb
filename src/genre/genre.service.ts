import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from './genre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>,
  ) {}

  async findAll(): Promise<Genre[]> {
    return await this.genreRepository.find();
  }

  async create(genre: Genre): Promise<Genre> {
    return await this.genreRepository.save(genre);
  }

  async remove(genre: Genre) {
    try {
      return await this.genreRepository.delete(genre);
    } catch (QueryFailedError) {
      return QueryFailedError;
    }
  }
}
