import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManufactersService } from './manufacters.service.js';
import { CreateManufacterDto } from './dto/create-manufacter.dto.js';
import { UpdateManufacterDto } from './dto/update-manufacter.dto.js';

@Controller('manufacters')
export class ManufactersController {
  constructor(private readonly manufactersService: ManufactersService) {}

  @Post()
  create(@Body() createManufacterDto: CreateManufacterDto) {
    return this.manufactersService.create(createManufacterDto);
  }

  @Get()
  findAll() {
    return this.manufactersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.manufactersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateManufacterDto: UpdateManufacterDto) {
    return this.manufactersService.update(+id, updateManufacterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.manufactersService.remove(+id);
  }
}
