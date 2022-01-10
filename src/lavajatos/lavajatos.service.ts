import { Injectable } from '@nestjs/common';
import { CreateLavajatoDto } from './dto/create-lavajato.dto';
import { UpdateLavajatoDto } from './dto/update-lavajato.dto';
import { Lavajato } from './entities/lavajato.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class LavajatosService {
  constructor (
    @InjectRepository(Lavajato)
    private lavajatosRepository: Repository<Lavajato>
  ){}


  create(createLavajatoDto: CreateLavajatoDto) {
    return this.lavajatosRepository.save(createLavajatoDto);
  }

  findAll(): Promise<Lavajato[]> {
    return this.lavajatosRepository.find();
  }

  findOne(id: number): Promise<Lavajato> {
    return  this.lavajatosRepository.findOne(id);
  }

  findByCidade(nomeDaCidade: string): Promise<Lavajato[]>{
    return this.lavajatosRepository.find({ cidade: nomeDaCidade });
  }

 async update(id: number, updateLavajatoDto: UpdateLavajatoDto) {
    await this.lavajatosRepository.update(id, updateLavajatoDto);
  }

  async remove(id: number): Promise<void> {
    await this.lavajatosRepository.delete(id);
  }
}
