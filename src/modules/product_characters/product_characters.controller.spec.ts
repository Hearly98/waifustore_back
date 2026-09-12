import { Test, TestingModule } from '@nestjs/testing';
import { ProductCharactersController } from './product_characters.controller.js';
import { ProductCharactersService } from './product_characters.service.js';

describe('ProductCharactersController', () => {
  let controller: ProductCharactersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductCharactersController],
      providers: [ProductCharactersService],
    }).compile();

    controller = module.get<ProductCharactersController>(ProductCharactersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
