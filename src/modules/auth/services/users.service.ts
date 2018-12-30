import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '../models/entities';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    async getAuthorizeUser(
        login: string,
        password: string,
    ): Promise<UserEntity> {
        return this.userRepository
            .find({ login, password })
            .then(data => data[0]);
    }
}
