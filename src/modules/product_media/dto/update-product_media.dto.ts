import { PartialType } from '@nestjs/mapped-types';
import { CreateProductMediaDto } from './create-product_media.dto.js';

export class UpdateProductMediaDto extends PartialType(CreateProductMediaDto) {}
