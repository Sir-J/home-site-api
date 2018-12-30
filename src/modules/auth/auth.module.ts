import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from 'src/modules/auth/controllers/auth.controller';
import { UsersService } from 'src/modules/auth/services/users.service';

import { ClaimsEntity, UserClaimEntity, UserEntity } from './models/entities';
import { AuthService, JwtStrategy } from './services';

@Module({
    imports: [
        TypeOrmModule.forFeature([ClaimsEntity, UserClaimEntity, UserEntity]),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secretOrPrivateKey: 'secretKey',
            signOptions: {
                expiresIn: 10800,
            },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, UsersService],
})
export class AuthModule {}
