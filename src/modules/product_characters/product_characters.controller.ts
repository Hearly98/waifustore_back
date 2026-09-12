import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductCharactersService } from './product_characters.service.js';
import { CreateProductCharacterDto } from './dto/create-product_character.dto.js';
import { UpdateProductCharacterDto } from './dto/update-product_character.dto.js';

@Controller('product-characters')
export class ProductCharactersController {
  constructor(private readonly productCharactersService: ProductCharactersService) {}

  @Post()
  create(@Body() createProductCharacterDto: CreateProductCharacterDto) {
    return this.productCharactersService.create(createProductCharacterDto);
  }

  @Get()
  findAll() {
    return this.productCharactersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productCharactersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductCharacterDto: UpdateProductCharacterDto) {
    return this.productCharactersService.update(+id, updateProductCharacterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productCharactersService.remove(+id);
  }
}
