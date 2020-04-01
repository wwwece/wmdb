import { Injectable } from '@nestjs/common';
import { Person } from './person.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  async findAll(): Promise<Person[]> {
    return await this.personRepository.find();
  }

  async create(person: Person): Promise<Person> {
    return await this.personRepository.save(person);
  }

  async update(person: Person) {
    return await this.personRepository.update(
      { firstname: person.firstname, lastname: person.lastname },
      person,
    );
  }

  async remove(person: Person) {
    try {
      return await this.personRepository.delete(person);
    } catch (QueryFailedError) {
      throw QueryFailedError;
    }
  }
}
