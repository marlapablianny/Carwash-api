import { Module } from '@nestjs/common';
import { AgendasService } from './agendas.service';
import { AgendasController } from './agendas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agenda } from './entities/agenda.entity';
import { UsersModule } from 'src/users/users.module';
import { LavajatosModule } from 'src/lavajatos/lavajatos.module';

@Module({
  imports: [TypeOrmModule.forFeature([Agenda]), AgendasModule, UsersModule, LavajatosModule],
  controllers: [AgendasController],
  providers: [AgendasService]
})
export class AgendasModule {}
