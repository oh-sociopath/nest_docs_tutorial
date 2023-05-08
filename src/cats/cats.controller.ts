import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseFilters, UseGuards, UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { CreateCatDto, createCatSchema, ListAllEntities, UpdateCatDto } from './dto/cats.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { HttpExceptionFilter } from '../httpExceptionFilter';
import { JoiValidationPipe } from './pipes/JoiValidationPipe';
import { CustomValidationPipe } from './pipes/customValidation.pipe';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './decorators/roles.decorator';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { TransformInterceptor } from './interceptor/transform.interceptor';

@Controller('cats')
@UseFilters(new HttpExceptionFilter())
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  @UsePipes(new JoiValidationPipe(createCatSchema))
  // @UsePipes(new CustomValidationPipe())
  @Roles('admin')
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  @UseInterceptors(TransformInterceptor)
  async findAll(@Query() query: ListAllEntities): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  // @UsePipes(ParseIntPipe)
  findOne(@Param('id', new ParseIntPipe()) id: number) {
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
