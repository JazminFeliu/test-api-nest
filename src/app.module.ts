import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestApiController } from './test-api/test-api.controller';

@Module({
  imports: [],
  controllers: [AppController, TestApiController],
  providers: [AppService],
})
export class AppModule {}
