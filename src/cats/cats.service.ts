import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id): Cat {
    const requiredCat = this.cats.find(cat => cat.id === id);
    console.log(`log: requiredCat:`, requiredCat);
    if(!requiredCat) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND)
    }
    return requiredCat;
  }
}
