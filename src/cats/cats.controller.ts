import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseFilters,
} from '@nestjs/common';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto/cats.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { HttpExceptionFilter } from '../httpExceptionFilter';

@Controller('cats')
@UseFilters(new HttpExceptionFilter())
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    console.log('log: createCatDto:', createCatDto);
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(@Query() query: ListAllEntities): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    console.log('log: updateCatDto: ', updateCatDto);
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
