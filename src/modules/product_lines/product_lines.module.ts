import { Module } from '@nestjs/common';
import { ProductLinesService } from './product_lines.service.js';
import { ProductLinesController } from './product_lines.controller.js';

@Module({
  controllers: [ProductLinesController],
  providers: [ProductLinesService],
})
export class ProductLinesModule {}
