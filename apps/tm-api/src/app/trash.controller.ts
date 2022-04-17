import {Controller, Get, Param, Post} from '@nestjs/common';

import { TrashService } from "./trash.service";

@Controller('trash')
export class TrashController {
  constructor(private readonly trashService: TrashService) {}

  @Get()
  getData() {
    return this.trashService.getCurrentTrash();
  }

  @Post(':id/took-out')
  setCurrentTrashTookOut(@Param() params): void {
    return this.trashService.setCurrentTrashTookOut(params.id);
  }
}
