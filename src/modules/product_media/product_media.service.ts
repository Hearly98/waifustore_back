import { Injectable } from '@nestjs/common';
import { CreateProductMediaDto } from './dto/create-product_media.dto.js';
import { UpdateProductMediaDto } from './dto/update-product_media.dto.js';

@Injectable()
export class ProductMediaService {
  create(createProductMediaDto: CreateProductMediaDto) {
    return 'This action adds a new productMedia';
  }

  findAll() {
    return `This action returns all productMedia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productMedia`;
  }

  update(id: number, updateProductMediaDto: UpdateProductMediaDto) {
    return `This action updates a #${id} productMedia`;
  }

  remove(id: number) {
    return `This action removes a #${id} productMedia`;
  }
}
