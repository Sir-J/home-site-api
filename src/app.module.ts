import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule, NewsModule } from 'src/modules';

import { AppController } from './app.controller';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'database.db',
            synchronize: true,
            logging: false,
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        }),
        NewsModule,
        AuthModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
