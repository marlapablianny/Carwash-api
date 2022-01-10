import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateAgendaDto } from './create-agenda.dto';


export class UpdateAgendaDto extends PartialType(CreateAgendaDto) {
    readonly data: string;
    readonly hora: string;

  
}
