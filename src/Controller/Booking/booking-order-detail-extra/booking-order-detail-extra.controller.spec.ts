import { Test, TestingModule } from '@nestjs/testing';
import { BookingOrderDetailExtraController } from './booking-order-detail-extra.controller';

describe('BookingOrderDetailExtraController', () => {
  let controller: BookingOrderDetailExtraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingOrderDetailExtraController],
    }).compile();

    controller = module.get<BookingOrderDetailExtraController>(BookingOrderDetailExtraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
