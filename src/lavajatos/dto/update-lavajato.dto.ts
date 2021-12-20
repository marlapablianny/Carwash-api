import { PartialType } from '@nestjs/mapped-types';
import { CreateLavajatoDto } from './create-lavajato.dto';

export class UpdateLavajatoDto extends PartialType(CreateLavajatoDto) {
    readonly nomedolavajato: string;
    readonly endereco: string;
    readonly telefone: string;
    readonly horario: string;
    readonly agendadeatendimento: string;
   
}
