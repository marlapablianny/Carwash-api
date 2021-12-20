import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    readonly nome: string;
    readonly endereco: string;
    readonly telefone: string;
    readonly email: string;
    readonly password: string;
   
}
