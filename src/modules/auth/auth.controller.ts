import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ){}

  @Post('/login')
  @ApiBody({ type: LoginDto })
  public async login(
    @Body() payload: LoginDto
  ): Promise<string> {
    const token = await this.authService.login(payload)
    return token
  }
}
