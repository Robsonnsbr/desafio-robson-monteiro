import { Resultado } from 'src/types/Types';

export const apiEndpoint = 'http://localhost:3000/resultados';

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

export const updateDados = async (dadosParaAtualizar: Resultado) => {
  try {
    const dadosAtuais = await getDados();

    const dadosExistentes = dadosAtuais.find(
      (dados: Resultado) => dados._id === dadosParaAtualizar._id
    );

    if (!dadosExistentes) {
      throw new Error('Os dados a serem atualizados não foram encontrados');
    }

    // const dadosAtualizados = {
    //   _id: dadosParaAtualizar._id
    // };

    const response = await fetch(`${apiEndpoint}/${dadosParaAtualizar._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosParaAtualizar)
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
