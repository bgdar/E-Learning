import { Test, TestingModule } from '@nestjs/testing';
import { ViewsAdminController } from './view-admin.controller';

describe('ViewsAdminController', () => {
  let controller: ViewsAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ViewsAdminController],
    }).compile();

    controller = module.get<ViewsAdminController>(ViewsAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
