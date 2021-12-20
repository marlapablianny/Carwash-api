import {UseGuards, Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LavajatosService } from './lavajatos.service';
import { CreateLavajatoDto } from './dto/create-lavajato.dto';
import { UpdateLavajatoDto } from './dto/update-lavajato.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('lavajatos')
export class LavajatosController {
  constructor(private readonly lavajatosService: LavajatosService) {}


  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createLavajatoDto: CreateLavajatoDto) {
    return this.lavajatosService.create(createLavajatoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.lavajatosService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lavajatosService.findOne(+id);
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
}
