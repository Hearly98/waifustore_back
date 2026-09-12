import { Test, TestingModule } from '@nestjs/testing';
import { ProductCharactersService } from './product_characters.service.js';

describe('ProductCharactersService', () => {
  let service: ProductCharactersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductCharactersService],
    }).compile();

    service = module.get<ProductCharactersService>(ProductCharactersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
