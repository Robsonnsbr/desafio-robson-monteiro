// resultado.service.ts

import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resultado } from './resultado.entity';

@Injectable()
export class ResultadosService {
  constructor(
    @InjectModel(Resultado.name) private resultadoModel: Model<Resultado>
  ) {}

  async criarResultado(
    bimestre: string,
    disciplina: string,
    nota: number
  ): Promise<Resultado> {
    const resultadoExistente = await this.resultadoModel
      .findOne({ bimestre, disciplina })
      .exec();

    if (resultadoExistente) {
      throw new BadRequestException(
        `Já existe um resultado para a disciplina ${disciplina} no bimestre ${bimestre}`
      );
    }

    const resultado = new this.resultadoModel({ bimestre, disciplina, nota });
    return resultado.save();
  }

  async obterTodosResultados(): Promise<Resultado[]> {
    return this.resultadoModel.find().exec();
  }

  async obterResultadosPorBimestre(bimestre: string): Promise<Resultado[]> {
    return this.resultadoModel.find({ bimestre }).exec();
  }

  async excluirResultado(id: string): Promise<void> {
    await this.resultadoModel.findByIdAndDelete(id).exec();
  }
}
