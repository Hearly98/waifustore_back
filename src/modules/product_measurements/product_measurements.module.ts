import { Module } from '@nestjs/common';
import { ProductMeasurementsService } from './product_measurements.service.js';
import { ProductMeasurementsController } from './product_measurements.controller.js';

@Module({
  controllers: [ProductMeasurementsController],
  providers: [ProductMeasurementsService],
})
export class ProductMeasurementsModule {}
