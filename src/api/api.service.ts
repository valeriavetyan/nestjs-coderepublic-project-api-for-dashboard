import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { Api, ApiDocument } from './schemas/api.schema';

@Injectable()
export class ApiService {
  constructor(@InjectModel(Api.name) private apiModel: Model<ApiDocument>) {}

  async getAll(): Promise<Api[]> {
    return this.apiModel.find().exec();
  }

  async getOneById(id: string): Promise<Api> {
    return this.apiModel.findById(id);
  }

  async create(createApiDto: CreateApiDto): Promise<Api> {
    const newApi = new this.apiModel(createApiDto);
    return newApi.save();
  }

  async remove(id: string): Promise<Api> {
    return this.apiModel.findByIdAndRemove(id);
  }

  async update(id: string, updateApiDto: UpdateApiDto): Promise<Api> {
    return this.apiModel.findByIdAndUpdate(id, updateApiDto, { new: true });
  }
}
