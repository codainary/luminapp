import { Controller, Post, Request, UseGuards } from '@nestjs/common';

import { AuthService } from '../services/auth.service';
import { LocalAuthGuard } from 'src/common/guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user); //TODO return JWT access token
  }
}
