"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const api_schema_1 = require("./schemas/api.schema");
let ApiService = class ApiService {
    constructor(apiModel) {
        this.apiModel = apiModel;
    }
    async getAll() {
        return this.apiModel.find().exec();
    }
    async getOneById(id) {
        return this.apiModel.findById(id);
    }
    async create(createApiDto) {
        const newApi = new this.apiModel(createApiDto);
        return newApi.save();
    }
    async remove(id) {
        return this.apiModel.findByIdAndRemove(id);
    }
    async update(id, updateApiDto) {
        return this.apiModel.findByIdAndUpdate(id, updateApiDto, { new: true });
    }
};
ApiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(api_schema_1.Api.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map