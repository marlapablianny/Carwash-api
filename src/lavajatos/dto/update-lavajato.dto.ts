import { PartialType } from '@nestjs/mapped-types';
import { CreateLavajatoDto } from './create-lavajato.dto';

export class UpdateLavajatoDto extends PartialType(CreateLavajatoDto) {
    readonly nomedolavajato: string;
    readonly endereco: string;
    readonly cidade: string;
    readonly telefone: string;
    readonly segundaasexta: string;
    readonly sabado: string;
    readonly agendadeatendimento: string;
   
}
