import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { pg } from 'pg'; // keep this, it force generatePackageJson to add `pg` in dependencies
import { getConnectionOptions } from 'typeorm';

import { AppController } from './app.controller';
import {TrashController} from "./trash.controller";
import { AppService } from './app.service';
import {TrashService} from "./trash.service";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
  ],
  controllers: [AppController, TrashController],
  providers: [AppService, TrashService],
})
export class AppModule {}
