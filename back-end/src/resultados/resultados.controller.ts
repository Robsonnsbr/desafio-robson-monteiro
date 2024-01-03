import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Param,
  Query,
  Put
} from '@nestjs/common';
import { ResultadosService } from './resultados.service';
import { Disciplina } from './resultado.entity';

@Controller('resultados')
export class ResultadosController {
  constructor(private readonly resultadosService: ResultadosService) {}

  // Função exclusiva para a criação da tabela resultados incluindo os bimestres.
  // **EM CASO DE ERRO NA CRIAÇÃO DO ARRAY, PODE SER ACESSADA**
  // O método 'atualizarDados' é responsável por preencher os dados faltantes.
  // NOTA: Não há um método de criação direta dos bimestres devido a este processo.
  @Post('/criar-bimestres')
  async criarBimestres() {
    return this.resultadosService.criarBimestres();
  }

  //  Essa função atualiza os dados dentro do objeto bimestre
  @Put(':id')
  async atualizarResultado(
    @Param('id') id: string,
    @Body()
    body: {
      disciplina: Disciplina;
      nota: number;
    }
  ) {
    const { disciplina, nota } = body;
    return this.resultadosService.atualizarResultado(id, disciplina, nota);
  }

  // Essa função pega todos os dados do array.
  @Get()
  async obterResultados() {
    return this.resultadosService.obterTodosResultados();
  }

  // Essa função pega todos os dados dentro do objeto bimestre.
  // Exemplo de uso: http://localhost:4000/resultados/por-bimestre?bimestre=PRIMEIRO
  @Get('por-bimestre')
  async obterResultadosPorBimestre(@Query('bimestre') bimestre: string) {
    console.log('Bimestre');
    return this.resultadosService.obterResultadosPorBimestre(bimestre);
  }

  //Essa Função excluí todo o objeto Bimestre.
  @Delete(':id')
  async excluirBimestre(@Param('id') id: string) {
    return this.resultadosService.excluirBimestre(id);
  }
}
