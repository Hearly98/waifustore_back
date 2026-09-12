import { Module } from '@nestjs/common';
import { ProductCharactersService } from './product_characters.service.js';
import { ProductCharactersController } from './product_characters.controller.js';

@Module({
  controllers: [ProductCharactersController],
  providers: [ProductCharactersService],
})
export class ProductCharactersModule {}
