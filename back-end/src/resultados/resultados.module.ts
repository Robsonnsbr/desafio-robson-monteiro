// src/resultados/resultados.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResultadosController } from './resultados.controller';
import { ResultadosService } from './resultados.service';
import { Resultado, ResultadoSchema } from './resultado.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Resultado.name, schema: ResultadoSchema }
    ])
  ],
  controllers: [ResultadosController],
  providers: [ResultadosService]
})
export class ResultadosModule {}
