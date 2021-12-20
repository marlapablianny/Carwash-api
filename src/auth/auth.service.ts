import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService : JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any>{
    const user = await this.usersService.findOneByEmail(email);
    if(user && user.password == password){
      const {password, ...rest} = user;
      return rest;
    }
    return null;
  }

  async loginUsuario(usuario: any) {
    const payload = {email: usuario.email, id: usuario.id};
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}