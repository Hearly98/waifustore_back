import { Test, TestingModule } from '@nestjs/testing';
import { ManufactersController } from './manufacters.controller.js';
import { ManufactersService } from './manufacters.service.js';

describe('ManufactersController', () => {
  let controller: ManufactersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManufactersController],
      providers: [ManufactersService],
    }).compile();

    controller = module.get<ManufactersController>(ManufactersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
