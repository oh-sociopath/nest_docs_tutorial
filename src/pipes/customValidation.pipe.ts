import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('----------------------------');
    console.log('yey, im inside');
    console.log('----------------------------');
    return value;
  }
}
