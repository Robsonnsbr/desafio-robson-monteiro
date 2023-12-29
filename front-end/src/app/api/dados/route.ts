// // pages/api/dados/route.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import ResultadoModel from '@/models/resultado';
// import { Resultado } from 'src/types/Types';

// export const getDados = async (req: NextApiRequest, res: NextApiResponse) => {
//   // Listagem
//   try {
//     const resultados = ResultadoModel.find();
//     console.log(resultados);
//     console.log('entrei aqui');
//     res.status(200).json(resultados);
//   } catch (error) {
//     res.status(500).json({ error: 'Erro ao obter os resultados.' });
//   }
// };

// export const createDado = async (req: NextApiRequest, res: NextApiResponse) => {
//   // Criação
//   try {
//     const novoResultado = req.body as Omit<Resultado, 'id'>;
//     const resultadoCriado = ResultadoModel.create(novoResultado);
//     res.status(201).json(resultadoCriado);
//   } catch (error) {
//     res.status(500).json({ error: 'Erro ao criar o resultado.' });
//   }
// };

// export const deleteDado = async (req: NextApiRequest, res: NextApiResponse) => {
//   // Remoção
//   try {
//     const { id } = req.body;
//     ResultadoModel.deleteById(id);
//     res.status(204).end();
//   } catch (error) {
//     res.status(500).json({ error: 'Erro ao remover o resultado.' });
//   }
// };

import ResultadoModel from '@/models/resultado';

import { NextResponse } from 'next/server';

export async function GET() {
  const resultados = ResultadoModel.find();
  const res = resultados;
  const data = res;
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  // const data = await res.json();
  return NextResponse.json({ data });
}
