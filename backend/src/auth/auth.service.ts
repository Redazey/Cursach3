import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signIn(credentials: {
    email: string;
    password: string;
  }): Promise<{ jwtToken: string }> {
    if (credentials.password != 'admin' && credentials.email != 'admin') {
      throw new UnauthorizedException();
    }

    const payload = { email: credentials.email };

    return {
      jwtToken: await this.jwtService.signAsync(payload),
    };
  }
}
