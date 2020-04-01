import { Entity, OneToMany, ManyToMany, PrimaryColumn } from 'typeorm';
import { Movie } from 'src/movie/movie.entity';

@Entity('persons')
export class Person {
  @PrimaryColumn('varchar', { name: 'firstname' })
  firstname: string;

  @PrimaryColumn('varchar', { name: 'lastname' })
  lastname: string;

  @OneToMany(
    type => Movie,
    movie => movie.director,
  )
  director: Movie[];

  @ManyToMany(
    type => Movie,
    movie => movie.actors,
  )
  actor: Movie[];
}
