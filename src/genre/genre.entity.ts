import { PrimaryColumn, Entity, ManyToMany } from 'typeorm';
import { Movie } from 'src/movie/movie.entity';

@Entity('genre')
export class Genre {
  @PrimaryColumn()
  name: string;

  @ManyToMany(
    type => Movie,
    movie => movie.genre,
  )
  movies: Movie[];
}
