import { Test, TestingModule } from '@nestjs/testing';
import { ManufactersService } from './manufacters.service.js';

describe('ManufactersService', () => {
  let service: ManufactersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManufactersService],
    }).compile();

    service = module.get<ManufactersService>(ManufactersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
