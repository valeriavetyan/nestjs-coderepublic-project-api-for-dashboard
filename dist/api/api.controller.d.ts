import { ApiService } from './api.service';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { Api } from './schemas/api.schema';
export declare class ApiController {
    private apiService;
    constructor(apiService: ApiService);
    getAll(): Promise<Api[]>;
    getOneById(id: string): Promise<Api>;
    create(createApiDto: CreateApiDto): Promise<Api>;
    update(updateApiDto: UpdateApiDto, id: string): Promise<Api>;
    remove(id: string): Promise<Api>;
}
