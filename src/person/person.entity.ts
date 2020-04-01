import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Movie } from 'src/movie/movie.entity';

@Entity('persons')
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
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
