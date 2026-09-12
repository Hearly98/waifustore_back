import { PartialType } from '@nestjs/mapped-types';
import { CreateProductLineDto } from './create-product_line.dto.js';

export class UpdateProductLineDto extends PartialType(CreateProductLineDto) {}
