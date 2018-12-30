import { Controller, Get } from '@nestjs/common';
import { NewsEntity } from 'src/modules/news/models/entities';

import { NewsService } from '../services';

@Controller('/news')
export class NewsController {
    constructor(private readonly service: NewsService) {}

    @Get('/getLastNews')
    getLastNews(): Promise<NewsEntity[]> {
        return this.service.getLastNews();
    }
}
