import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthService {
  login(email: string, senha: string) {
    if (
      email === 'admin@tereverde.com' &&
      senha === '123456'
    ) {
      return {
        message: 'Login realizado com sucesso',
      };
    }

    throw new UnauthorizedException(
      'Email ou senha inválidos',
    );
  }
}