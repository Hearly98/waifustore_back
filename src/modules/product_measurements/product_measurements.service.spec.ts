import { Test, TestingModule } from '@nestjs/testing';
import { ProductMeasurementsService } from './product_measurements.service.js';

describe('ProductMeasurementsService', () => {
  let service: ProductMeasurementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductMeasurementsService],
    }).compile();

    service = module.get<ProductMeasurementsService>(ProductMeasurementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
