import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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

@Schema({ timestamps: true })
export class Resultado extends Document {
  @Prop({ required: true, enum: Bimestre })
  bimestre: Bimestre;

  @Prop({ required: true, enum: Disciplina })
  disciplina: Disciplina;

  @Prop({ required: true })
  nota: number;
}

export const ResultadoSchema = SchemaFactory.createForClass(Resultado);
