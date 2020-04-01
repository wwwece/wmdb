import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  year: number;

  @Column()
  img: string;

  @Column('varchar', { length: 512 })
  description: string;
}
