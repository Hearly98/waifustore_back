import { Module } from '@nestjs/common';
import { ProductMediaService } from './product_media.service.js';
import { ProductMediaController } from './product_media.controller.js';

@Module({
  controllers: [ProductMediaController],
  providers: [ProductMediaService],
})
export class ProductMediaModule {}
