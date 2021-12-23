import { Controller, Get, Request, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { request } from 'express';
import { LavajatosService } from 'src/lavajatos/lavajatos.service';
import { UsersService } from 'src/users/users.service';
import { AgendasService } from './agendas.service';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('agendas')
export class AgendasController {
  constructor(
    private readonly agendasService: AgendasService,
    private readonly lavajatosService: LavajatosService,
    private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() {idLavajato}: any,  @Request() request: any) {
    const idUser =  request.user.id
    const user = await this.usersService.findOne(idUser);
    const lavajato = await this.lavajatosService.findOne(idLavajato);
  
    if(!lavajato) {
      throw new NotFoundException('Lava jato não encontrado')
    }

    await this.agendasService.create({user, lavajato});
  
  }


  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.agendasService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.agendasService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgendaDto: UpdateAgendaDto) {
    return this.agendasService.update(+id, updateAgendaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agendasService.remove(+id);
  }
}
