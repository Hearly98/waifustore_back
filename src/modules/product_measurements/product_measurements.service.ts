import { Injectable } from '@nestjs/common';
import { CreateProductMeasurementDto } from './dto/create-product_measurement.dto.js';
import { UpdateProductMeasurementDto } from './dto/update-product_measurement.dto.js';

@Injectable()
export class ProductMeasurementsService {
  create(createProductMeasurementDto: CreateProductMeasurementDto) {
    return 'This action adds a new productMeasurement';
  }

  findAll() {
    return `This action returns all productMeasurements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productMeasurement`;
  }

  update(id: number, updateProductMeasurementDto: UpdateProductMeasurementDto) {
    return `This action updates a #${id} productMeasurement`;
  }

  remove(id: number) {
    return `This action removes a #${id} productMeasurement`;
  }
}
