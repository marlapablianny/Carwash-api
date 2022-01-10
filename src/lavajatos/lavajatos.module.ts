import { Module } from '@nestjs/common';
import { LavajatosService } from './lavajatos.service';
import { LavajatosController } from './lavajatos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lavajato } from './entities/lavajato.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Lavajato]), LavajatosModule, UsersModule],
  controllers: [LavajatosController],
  providers: [LavajatosService],
  exports: [LavajatosService]
})
export class LavajatosModule {}
