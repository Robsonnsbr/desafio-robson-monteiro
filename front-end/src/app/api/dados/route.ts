import { Resultado } from 'src/types/Types';

type ResultadoId = Pick<Resultado, '_id'>;

type ResultadoUpdate = Omit<Resultado, 'bimestre' | 'createdAt' | 'updatedAt'>;

export const apiEndpoint = 'http://localhost:4000/resultados';

const verificaAtributos = (
  obj: ResultadoUpdate | ResultadoId,
  atributos: (keyof Resultado)[]
): boolean => {
  return atributos.every((atributo) =>
    Object.prototype.hasOwnProperty.call(obj, atributo)
  );
};

export const getDados = async () => {
  try {
    const response = await fetch(apiEndpoint);
    if (!response.ok) {
      throw new Error('Erro ao obter resultados');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar resultados:', error);
    throw error;
  }
};

export const updateDados = async (
  dadosParaAtualizar: ResultadoUpdate | ResultadoId
) => {
  const atributosRequire: (keyof ResultadoUpdate)[] = [
    '_id',
    'disciplina',
    'nota'
  ];

  const isUpdate = verificaAtributos(dadosParaAtualizar, atributosRequire);

  try {
    const dadosAtuais = await getDados();

    const dadosExistentes = dadosAtuais.find(
      (dados: Resultado) => dados._id === dadosParaAtualizar._id
    );

    if (!dadosExistentes) {
      throw new Error('Os dados a serem atualizados não foram encontrados');
    }

    let dadosAtualizados: ResultadoUpdate | ResultadoId;
    if (isUpdate) {
      if ('disciplina' in dadosParaAtualizar) {
        dadosAtualizados = {
          _id: dadosParaAtualizar._id,
          disciplina: dadosParaAtualizar.disciplina,
          nota: dadosParaAtualizar.nota
        };
      } else {
        throw new Error(
          'Propriedade "disciplina" ausente no tipo ResultadoUpdate'
        );
      }
    } else {
      if (
        Object.keys(dadosParaAtualizar).length === 1 &&
        '_id' in dadosParaAtualizar
      ) {
        dadosAtualizados = {
          _id: dadosExistentes._id,
          disciplina: null,
          nota: null
        };
      } else {
        throw new Error('O objeto deve conter apenas a propriedade "_id"');
      }
    }

    const response = await fetch(`${apiEndpoint}/${dadosAtualizados._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosAtualizados)
    });

    if (!response.ok) {
      throw new Error('Erro ao atualizar as informações');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao atualizar informações:', error);
    throw error;
  }
};
