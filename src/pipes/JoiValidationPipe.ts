import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';
import { ObjectSchema } from 'joi';

export class JoiValidationPipe implements PipeTransform {
    constructor(private schema: ObjectSchema) {
    }

    transform(value: any, metadata: ArgumentMetadata): any {
        const addedBirthdate = {...value, birthdate: new Date()}
        const { error } = this.schema.validate(addedBirthdate);
        if(error) {
            throw new BadRequestException('Validation failed');
        }
        return value;
    }
}
