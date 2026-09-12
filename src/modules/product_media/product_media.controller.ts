import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductMediaService } from './product_media.service.js';
import { CreateProductMediaDto } from './dto/create-product_media.dto.js';
import { UpdateProductMediaDto } from './dto/update-product_media.dto.js';

@Controller('product-media')
export class ProductMediaController {
  constructor(private readonly productMediaService: ProductMediaService) {}

  @Post()
  create(@Body() createProductMediaDto: CreateProductMediaDto) {
    return this.productMediaService.create(createProductMediaDto);
  }

  @Get()
  findAll() {
    return this.productMediaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productMediaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductMediaDto: UpdateProductMediaDto) {
    return this.productMediaService.update(+id, updateProductMediaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productMediaService.remove(+id);
  }
}
