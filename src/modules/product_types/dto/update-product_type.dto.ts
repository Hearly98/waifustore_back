import { PartialType } from '@nestjs/mapped-types';
import { CreateProductTypeDto } from './create-product_type.dto.js';

export class UpdateProductTypeDto extends PartialType(CreateProductTypeDto) {}
