import { Controller, Body, Get, Post } from '@nestjs/common';
import { Person } from './person.entity';
import { PersonService } from './person.service';

@Controller('persons')
export class PersonController {
  constructor(private personService: PersonService) {}

  @Get()
  findAll(): Promise<Person[]> {
    return this.personService.findAll();
  }

  @Post()
  create(@Body() person: Person) {
    this.personService.create(person);
  }
}
