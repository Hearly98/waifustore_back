import { Injectable } from '@nestjs/common';
import { CreateManufacterDto } from './dto/create-manufacter.dto.js';
import { UpdateManufacterDto } from './dto/update-manufacter.dto.js';

@Injectable()
export class ManufactersService {
  create(createManufacterDto: CreateManufacterDto) {
    return 'This action adds a new manufacter';
  }

  findAll() {
    return `This action returns all manufacters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} manufacter`;
  }

  update(id: number, updateManufacterDto: UpdateManufacterDto) {
    return `This action updates a #${id} manufacter`;
  }

  remove(id: number) {
    return `This action removes a #${id} manufacter`;
  }
}
