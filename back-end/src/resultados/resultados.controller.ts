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

  @Post('/criar-bimestres')
  async criarBimestres() {
    return this.resultadosService.criarBimestres();
  }

  @Put(':id')
  async atualizarResultado(
    @Param('id') id: string,
    @Body()
    body: {
      disciplina: Disciplina;
      nota: number;
    }
  ) {
    console.log(body);
    console.log(id);
    const { disciplina, nota } = body;
    return this.resultadosService.atualizarResultado(id, disciplina, nota);
  }
  // @Post()
  // async criarResultado(
  //   @Body('bimestre') bimestre: string,
  //   @Body('disciplina') disciplina: string,
  //   @Body('nota') nota: number
  // ) {
  //   return this.resultadosService.criarResultado(bimestre, disciplina, nota);
  // }

  @Get()
  async obterResultados() {
    return this.resultadosService.obterTodosResultados();
  }

  // Método para buscar por bimestre, por exemplo
  @Get('por-bimestre')
  async obterResultadosPorBimestre(@Query('bimestre') bimestre: string) {
    return this.resultadosService.obterResultadosPorBimestre(bimestre);
  }

  @Delete(':id')
  async excluirResultado(@Param('id') id: string) {
    return this.resultadosService.excluirResultado(id);
  }
}
