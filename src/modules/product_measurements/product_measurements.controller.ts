import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductMeasurementsService } from './product_measurements.service.js';
import { CreateProductMeasurementDto } from './dto/create-product_measurement.dto.js';
import { UpdateProductMeasurementDto } from './dto/update-product_measurement.dto.js';

@Controller('product-measurements')
export class ProductMeasurementsController {
  constructor(private readonly productMeasurementsService: ProductMeasurementsService) {}

  @Post()
  create(@Body() createProductMeasurementDto: CreateProductMeasurementDto) {
    return this.productMeasurementsService.create(createProductMeasurementDto);
  }

  @Get()
  findAll() {
    return this.productMeasurementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productMeasurementsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductMeasurementDto: UpdateProductMeasurementDto) {
    return this.productMeasurementsService.update(+id, updateProductMeasurementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productMeasurementsService.remove(+id);
  }
}
