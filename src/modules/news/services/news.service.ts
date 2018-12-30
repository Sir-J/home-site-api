import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NewsEntity } from '../models/entities';

@Injectable()
export class NewsService {
    constructor(
        @InjectRepository(NewsEntity)
        private readonly repository: Repository<NewsEntity>) {}

    async getLastNews(): Promise<NewsEntity[]> {
        return await this.repository.find();
    }
}
