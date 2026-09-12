import { PartialType } from '@nestjs/mapped-types';
import { CreateSupplierDto } from './create-supplier.dto';
import { UUID } from 'node:crypto';

export class UpdateSupplierDto extends PartialType(CreateSupplierDto) {
  id: UUID;
}
