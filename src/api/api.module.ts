import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { Api, ApiSchema } from './schemas/api.schema';

@Module({
  providers: [ApiService],
  controllers: [ApiController],
  imports: [MongooseModule.forFeature([{ name: Api.name, schema: ApiSchema }])],
})
export class ApiModule {}
