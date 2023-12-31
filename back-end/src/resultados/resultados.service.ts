import { Injectable, BadRequestException, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Disciplina, Resultado } from './resultado.entity';

@Injectable()
export class ResultadosService implements OnModuleInit {
  constructor(
    @InjectModel(Resultado.name) private resultadoModel: Model<Resultado>
  ) {}

  async onModuleInit() {
    await this.criarBimestres();
  }

  async criarBimestres() {
    const bimestresIniciais = ['PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO'];

    for (const bimestre of bimestresIniciais) {
      const existemRegistros = await this.resultadoModel.exists({ bimestre });

      if (!existemRegistros) {
        try {
          const resultado = new this.resultadoModel({ bimestre });
          await resultado.save();
        } catch (error) {
          console.error(error);
        }
      }
    }
  }

  async atualizarResultado(
    id: string,
    disciplina: Disciplina,
    nota: number
  ): Promise<Resultado | null> {
    const resultadoExistente = await this.resultadoModel.findById(id).exec();
    if (!resultadoExistente) {
      return null;
    }

    try {
      console.log(disciplina);
      resultadoExistente.disciplina = disciplina;
      resultadoExistente.nota = nota;
      // console.log(resultadoExistente);
      const resultadoAtualizado = await resultadoExistente.save();
      return resultadoAtualizado;
    } catch (error) {
      console.error(error);
      throw new BadRequestException('Erro ao atualizar o resultado');
    }
  }

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
