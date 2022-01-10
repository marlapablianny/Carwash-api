import { Injectable, UnsupportedMediaTypeException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';
import { Agenda } from './entities/agenda.entity';

@Injectable()
export class AgendasService {

  constructor(
    @InjectRepository(Agenda)
    private agendasRepository: Repository<Agenda>,
  ){}

  create(createAgendaDto: CreateAgendaDto) {
    return this.agendasRepository.save(createAgendaDto);
  }

  findAll(): Promise<Agenda[]> {
    return this.agendasRepository.find();
  }

  findOne(id: number): Promise<Agenda> {
    return  this.agendasRepository.findOne(id);
  }

  findByAgenda(userId: number): Promise<Agenda[]>{
    return this.agendasRepository.find({ where: {userId} });
  }

  async update(id: number, updateAgendaDto: UpdateAgendaDto) {
    await this.agendasRepository.update(id, updateAgendaDto);
  }

  async remove(id: number) {
    await this.agendasRepository.delete(id);
  }
}
