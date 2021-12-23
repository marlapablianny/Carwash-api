import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { LavajatosModule } from './lavajatos/lavajatos.module';
import { boolean } from 'boolean';
import { AgendasModule } from './agendas/agendas.module';

@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({ 
        "type": 'mysql', 
        "host": process.env.TYPEORM_HOST,
        "port": parseInt(process.env.TYPEORM_PORT), 
        "username": process.env.TYPEORM_USERNAME, 
        "password": process.env.TYPEORM_PASSWORD, 
        "database": process.env.TYPEORM_DATABASE, 
        "entities": ["dist/**/*.entity{.ts,.js}"],
        "synchronize": boolean(process.env.TYPEORM_SYNCHRONIZE)
      })
    }),
  UsersModule,
  AuthModule,
  LavajatosModule,
  AgendasModule,
  ],
})
export class AppModule {}
