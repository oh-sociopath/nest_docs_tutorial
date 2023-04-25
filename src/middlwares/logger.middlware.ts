import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`heeey i'm middleware starting here`);
    console.log(`doing something`);
    console.log(`and this is end,
     i'm calling next() function after this log`);
    next();
  }
}
