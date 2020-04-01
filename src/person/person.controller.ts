import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { Person } from './person.entity';
import { PersonService } from './person.service';

@Controller('persons')
export class PersonController {
  constructor(private personService: PersonService) {}

  @Get()
  async findAll(): Promise<Person[]> {
    return await this.personService.findAll();
  }

  @Post()
  async create(@Body() person: Person): Promise<Person> {
    return await this.personService.create(person);
  }

  @Put()
  // async update(@Param('id') id: number, @Body() person: Person) {
  async update(@Body() person: Person) {
    return (await this.personService.update(person)).affected > 0;
  }

  @Delete()
  // async remove(@Param('id') id: number): Promise<DeleteResult> {
  async remove(@Body() person: Person) {
    try {
      return (await this.personService.remove(person)).affected > 0;
    } catch (QueryFailedError) {
      return false;
    }
  }
}
