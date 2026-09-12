import { Module } from '@nestjs/common';
import { ManufactersService } from './manufacters.service.js';
import { ManufactersController } from './manufacters.controller.js';

@Module({
  controllers: [ManufactersController],
  providers: [ManufactersService],
})
export class ManufactersModule {}
