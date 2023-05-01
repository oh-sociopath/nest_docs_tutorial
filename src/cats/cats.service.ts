import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    const requiredCat = this.cats.find(
      (existingCat) => existingCat.id === cat.id,
    );

    if (requiredCat) {
      throw new ConflictException();
    }
    this.cats.push(cat);
    return `Cat with id ${cat.id} created`;
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id): Cat {
    console.log('im in provider');
    const requiredCat = this.cats.find((cat) => cat.id === +id);

    if (!requiredCat) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return requiredCat;
  }
}
