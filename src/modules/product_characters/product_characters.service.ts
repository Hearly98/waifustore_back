import { Injectable } from '@nestjs/common';
import { CreateProductCharacterDto } from './dto/create-product_character.dto.js';
import { UpdateProductCharacterDto } from './dto/update-product_character.dto.js';

@Injectable()
export class ProductCharactersService {
  create(createProductCharacterDto: CreateProductCharacterDto) {
    return 'This action adds a new productCharacter';
  }

  findAll() {
    return `This action returns all productCharacters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productCharacter`;
  }

  update(id: number, updateProductCharacterDto: UpdateProductCharacterDto) {
    return `This action updates a #${id} productCharacter`;
  }

  remove(id: number) {
    return `This action removes a #${id} productCharacter`;
  }
}
