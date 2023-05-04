import * as Joi from 'joi';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateCatDto {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
  @IsDate()
  birthdate: Date;
  @IsString()
  owner: string;
  @IsString()
  breed: string;
}

export const createCatSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  birthdate: Joi.date(),
  owner: Joi.string().required(),
  breed: Joi.string().required(),
})

export class ListAllEntities {
  idk: any;
  limit: any;
}

export class UpdateCatDto extends CreateCatDto {}
