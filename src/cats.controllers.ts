import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) {}


  @Get()
  findAll(@Req() request: Request): Cat[] {
    return this.catsService.findAll();
  }  
}