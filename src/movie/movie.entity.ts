import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Person } from 'src/person/person.entity';
import { Genre } from 'src/genre/genre.entity';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  year: number;

  @Column('varchar', { nullable: true })
  img: string;

  @Column('varchar', { length: 512, nullable: true })
  description: string;

  @Column({ default: false })
  watched: boolean;

  @Column({ nullable: true })
  stars: number;

  @ManyToOne(
    type => Person,
    person => person.director,
    { cascade: true },
  )
  director: Person;

  @ManyToMany(
    type => Person,
    person => person.actor,
    { cascade: true },
  )
  @JoinTable()
  actors: Person[];

  @ManyToMany(
    type => Genre,
    genre => genre.movies,
    { cascade: true },
  )
  @JoinTable()
  genre: Genre[];
}
