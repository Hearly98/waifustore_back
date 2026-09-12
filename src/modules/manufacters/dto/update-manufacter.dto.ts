import { PartialType } from '@nestjs/mapped-types';
import { CreateManufacterDto } from './create-manufacter.dto.js';

export class UpdateManufacterDto extends PartialType(CreateManufacterDto) {}
