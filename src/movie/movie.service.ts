import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { Repository, DeleteResult } from 'typeorm';
import { Person } from 'src/person/person.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async findAll(): Promise<Movie[]> {
    return await this.movieRepository.find({
      relations: ['director', 'actors'],
    });
  }

  async create(movie: Movie) {
    try {
      return await this.movieRepository.save(movie);
    } catch (QueryFailedError) {
      return QueryFailedError;
    }
  }

  async update(id: number, movie: Movie) {
    return await this.movieRepository.update(id, movie);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.movieRepository.delete(id);
  }
}
