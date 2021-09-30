import { Model } from 'mongoose';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { Api, ApiDocument } from './schemas/api.schema';
export declare class ApiService {
    private apiModel;
    constructor(apiModel: Model<ApiDocument>);
    getAll(): Promise<Api[]>;
    getOneById(id: string): Promise<Api>;
    create(createApiDto: CreateApiDto): Promise<Api>;
    remove(id: string): Promise<Api>;
    update(id: string, updateApiDto: UpdateApiDto): Promise<Api>;
}
