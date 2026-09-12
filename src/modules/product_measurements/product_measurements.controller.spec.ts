import { Test, TestingModule } from '@nestjs/testing';
import { ProductMeasurementsController } from './product_measurements.controller.js';
import { ProductMeasurementsService } from './product_measurements.service.js';

describe('ProductMeasurementsController', () => {
  let controller: ProductMeasurementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductMeasurementsController],
      providers: [ProductMeasurementsService],
    }).compile();

    controller = module.get<ProductMeasurementsController>(ProductMeasurementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
