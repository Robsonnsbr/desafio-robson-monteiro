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

  @Prop({ required: false, enum: Disciplina, default: null })
  disciplina: Disciplina | null;

  @Prop({ required: false, default: null })
  nota: number | null;
}

export const ResultadoSchema = SchemaFactory.createForClass(Resultado);
