import { PartialType } from '@nestjs/mapped-types';
import { CreateProductMeasurementDto } from './create-product_measurement.dto.js';

export class UpdateProductMeasurementDto extends PartialType(CreateProductMeasurementDto) {}
