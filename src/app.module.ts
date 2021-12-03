import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { DogModule } from './dog/dog.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/key';

@Module({
  imports: [DogModule, ItemsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
