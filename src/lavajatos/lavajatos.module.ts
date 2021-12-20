import { Module } from '@nestjs/common';
import { LavajatosService } from './lavajatos.service';
import { LavajatosController } from './lavajatos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lavajato } from './entities/lavajato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lavajato]), LavajatosModule],
  controllers: [LavajatosController],
  providers: [LavajatosService],
  exports: [LavajatosService]
})
export class LavajatosModule {}
