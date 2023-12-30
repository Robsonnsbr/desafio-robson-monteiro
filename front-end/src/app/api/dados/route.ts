export const apiEndpoint = 'http://localhost:3000/resultados'; // Substitua pela URL real da sua API

export const fetchResultados = async () => {
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
