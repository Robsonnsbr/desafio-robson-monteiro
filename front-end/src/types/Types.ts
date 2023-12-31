export interface Resultado {
  _id: string;
  bimestre: 'PRIMEIRO' | 'SEGUNDO' | 'TERCEIRO' | 'QUARTO';
  disciplina: 'Biologia' | 'Artes' | 'Geografia' | 'Sociologia';
  nota: number;
  createdAt: Date;
  updatedAt: Date;
}
