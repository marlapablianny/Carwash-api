import {UseGuards, Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { LavajatosService } from './lavajatos.service';
import { CreateLavajatoDto } from './dto/create-lavajato.dto';
import { UpdateLavajatoDto } from './dto/update-lavajato.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from 'src/users/users.service';

@Controller('lavajatos')
export class LavajatosController {
  constructor(private readonly lavajatosService: LavajatosService, private usersService: UsersService) {}


  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createLavajatoDto: CreateLavajatoDto, @Request() req) {
    return this.usersService.findOne(req.user.id).then((user) => {
      return this.lavajatosService.create({...createLavajatoDto, user});
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.lavajatosService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post('busca')
  findByCidade(@Body() body) {
    const { cidade } = body
    return this.lavajatosService.findByCidade(cidade);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLavajatoDto: UpdateLavajatoDto) {
    return this.lavajatosService.update(+id, updateLavajatoDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lavajatosService.remove(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('meulavajato')
  getProfile(@Request() req) {
    return this.usersService.findOne(req.user.id);
  }
}
