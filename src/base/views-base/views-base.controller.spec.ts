import { Test, TestingModule } from '@nestjs/testing';
import { BaseViewsController } from './views-base.controller';

describe('ViewsController', () => {
  let controller: BaseViewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaseViewsController],
    }).compile();

    controller = module.get<BaseViewsController>(BaseViewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
