import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/modules/auth/models/entities';

import { UsersService } from './users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    async createToken(login, password) {
        const user = await this.usersService.getAuthorizeUser(login, password);
        const payload = {
            id: user.id,
            fullName: user.fullName,
            preferred_username: user.login,
            claims: user.claims.map(claim => claim.claim.name),
        };

        const accessToken = this.jwtService.sign(payload);

        return {
            access_token: accessToken,
        };
    }

    // async validateUser(payload: JwtPayload): Promise<any> {
    //     return await this.usersService.findOneByEmail(payload.email);
    // }
}
