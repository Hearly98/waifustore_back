import { PartialType } from '@nestjs/mapped-types';
import { CreateProductCharacterDto } from './create-product_character.dto.js';

export class UpdateProductCharacterDto extends PartialType(CreateProductCharacterDto) {}
