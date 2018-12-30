import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from 'src/modules/auth/models/dto';

import { AuthService } from '../services';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('token')
    async createToken(@Body() authDto: AuthDto): Promise<any> {
        return await this.authService.createToken(
            authDto.username,
            authDto.password,
        );
    }
}
