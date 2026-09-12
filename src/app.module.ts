import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CustomersModule } from './modules/customers/customers.module.js';
import { ProductLinesModule } from './src/modules/product_lines/product_lines.module.js';
import { ProductTypesModule } from './modules/product_types/product_types.module.js';
import { ManufactersModule } from './modules/manufacters/manufacters.module.js';
import { ProductCharactersModule } from './modules/product_characters/product_characters.module.js';
import { ProductMeasurementsModule } from './modules/product_measurements/product_measurements.module.js';
import { ProductMediaModule } from './modules/product_media/product_media.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'waifustore-back',
    }),
    CustomersModule,
    ProductLinesModule,
    ProductTypesModule,
    ManufactersModule,
    ProductCharactersModule,
    ProductMeasurementsModule,
    ProductMediaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
