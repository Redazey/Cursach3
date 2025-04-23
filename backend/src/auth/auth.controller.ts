import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post()
  async signIn(@Body() signInDto: Record<string, any>) {
    return await this.authService.signIn({
      email: signInDto.email,
      password: signInDto.password,
    });
  }
}
