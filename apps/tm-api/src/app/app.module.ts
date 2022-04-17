import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import {TrashController} from "./trash.controller";
import { AppService } from './app.service';
import {TrashService} from "./trash.service";

@Module({
  imports: [],
  controllers: [AppController, TrashController],
  providers: [AppService, TrashService],
})
export class AppModule {}
