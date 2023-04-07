import { Controller, Post, UseGuards, Request } from '@nestjs/common';

import { AuthService } from '../services/auth.service';
import { LocalAuthGuard } from 'src/common/guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: any) {
    return req.user;
  }
}
