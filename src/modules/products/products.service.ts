import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto.js";
import { UpdateProductDto } from "./dto/update-product.dto.js";

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return 'This action returns all products';
  }

  findOne(id: number) {
    return `This action returns a product with id ${id}`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a product with id ${id}`;
  }

  remove(id: number) {
    return `This action removes a product with id ${id}`;
  }

}
