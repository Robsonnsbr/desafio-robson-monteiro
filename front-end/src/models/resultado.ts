interface Resultado {
  id: string;
  bimestre: 'PRIMEIRO' | 'SEGUNDO' | 'TERCEIRO' | 'QUARTO';
  disciplina: 'Biologia' | 'Artes' | 'Geografia' | 'Sociologia';
  nota: number;
  criadoEm: Date;
  atualizadoEm: Date;
}

const resultadosFicticios: Resultado[] = [
  {
    id: '1',
    bimestre: 'PRIMEIRO',
    disciplina: 'Biologia',
    nota: 8.5,
    criadoEm: new Date(),
    atualizadoEm: new Date()
  },
  {
    id: '2',
    bimestre: 'SEGUNDO',
    disciplina: 'Artes',
    nota: 7.0,
    criadoEm: new Date(),
    atualizadoEm: new Date()
  },
  {
    id: '3',
    bimestre: 'SEGUNDO',
    disciplina: 'Artes',
    nota: 7.0,
    criadoEm: new Date(),
    atualizadoEm: new Date()
  },
  {
    id: '4',
    bimestre: 'SEGUNDO',
    disciplina: 'Artes',
    nota: 7.0,
    criadoEm: new Date(),
    atualizadoEm: new Date()
  }
];

const resultadoModel = {
  find: (): Resultado[] => resultadosFicticios,
  create: (novoResultado: Omit<Resultado, 'id'>): Resultado => {
    const resultado: Resultado = {
      id: `${resultadosFicticios.length + 1}`,
      ...novoResultado,
      criadoEm: new Date(),
      atualizadoEm: new Date()
    };
    resultadosFicticios.push(resultado);
    return resultado;
  },
  deleteById: (id: string): void => {
    const index = resultadosFicticios.findIndex(
      (resultado) => resultado.id === id
    );
    if (index !== -1) {
      resultadosFicticios.splice(index, 1);
    }
  }
};

export default resultadoModel;
