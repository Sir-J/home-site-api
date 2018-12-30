import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsEntity } from 'src/modules/news/models/entities';

import { NewsController } from './controllers/news.controller';
import { NewsService } from './services';

@Module({
    imports: [TypeOrmModule.forFeature([NewsEntity])],
    controllers: [NewsController],
    providers: [NewsService],
})
export class NewsModule {}
