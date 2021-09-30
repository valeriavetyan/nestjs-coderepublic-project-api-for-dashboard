import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { Api } from './schemas/api.schema';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get()
  getAll(): Promise<Api[]> {
    return this.apiService.getAll();
  }

  @Get(':id')
  getOneById(@Param('id') id: string): Promise<Api> {
    return this.apiService.getOneById(id);
  }

  @Post()
  create(@Body() createApiDto: CreateApiDto): Promise<Api> {
    return this.apiService.create(createApiDto);
  }

  @Put(':id')
  update(
    @Body() updateApiDto: UpdateApiDto,
    @Param('id') id: string,
  ): Promise<Api> {
    return this.apiService.update(id, updateApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Api> {
    return this.apiService.remove(id);
  }
}
