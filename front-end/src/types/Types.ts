export interface Resultado {
  _id: string;
  bimestre: Bimestre;
  disciplina: Disciplina | null;
  nota: number | null;
  createdAt: Date;
  updatedAt?: Date;
}

export enum Bimestre {
  PRIMEIRO = 'PRIMEIRO',
  SEGUNDO = 'SEGUNDO',
  TERCEIRO = 'TERCEIRO',
  QUARTO = 'QUARTO'
}

export enum Disciplina {
  BIOLOGIA = 'Biologia',
  ARTES = 'Artes',
  GEOGRAFIA = 'Geografia',
  SOCIOLOGIA = 'Sociologia'
}
