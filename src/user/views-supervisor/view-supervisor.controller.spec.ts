import { Test, TestingModule } from '@nestjs/testing';
import { ViewsSupervisorController } from './view-supervisor.controller';

describe('ViewsSupervisorController', () => {
  let controller: ViewsSupervisorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ViewsSupervisorController],
    }).compile();

    controller = module.get<ViewsSupervisorController>(ViewsSupervisorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
