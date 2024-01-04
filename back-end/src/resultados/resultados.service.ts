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
          const resultado = new this.resultadoModel({
            bimestre,
            nota: null,
            disciplina: null
          });

          await resultado.save();
          console.log('Sucesso ao criar tabela de dados!');
        } catch (error) {
          console.error('Erro ao tentar criar a Tabela Resultado', error);
        }
      }
      console.warn('Tabela de dados pronta!');
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
      resultadoExistente.disciplina = disciplina;
      resultadoExistente.nota = nota;
      const resultadoAtualizado = await resultadoExistente.save();
      console.log('Nota e Disciplina Atualizados!');
      return resultadoAtualizado;
    } catch (error) {
      console.error(error);
      throw new BadRequestException('Erro ao atualizar o resultado');
    }
  }

  async obterTodosResultados(): Promise<Resultado[]> {
    return this.resultadoModel.find().exec();
  }

  async obterResultadosPorBimestre(bimestre: string): Promise<Resultado[]> {
    return this.resultadoModel.find({ bimestre }).exec();
  }

  async excluirBimestre(id: string): Promise<void> {
    await this.resultadoModel.findByIdAndDelete(id).exec();
  }
}
