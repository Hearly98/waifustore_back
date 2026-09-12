import { Module } from '@nestjs/common';
import { ProductTypesService } from './product_types.service.js';
import { ProductTypesController } from './product_types.controller.js';

@Module({
  controllers: [ProductTypesController],
  providers: [ProductTypesService],
})
export class ProductTypesModule {}
