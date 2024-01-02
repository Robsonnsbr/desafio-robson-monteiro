export interface Resultado {
  _id: string;
  bimestre: 'PRIMEIRO' | 'SEGUNDO' | 'TERCEIRO' | 'QUARTO';
  disciplina: 'Biologia' | 'Artes' | 'Geografia' | 'Sociologia' | null;
  nota: number | null;
  createdAt: Date;
  updatedAt: Date | null;
}
