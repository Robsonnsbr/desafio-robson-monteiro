const formatarBimestre = (bimestre: string): string => {
  const mapping: Record<string, string> = {
    PRIMEIRO: '1',
    SEGUNDO: '2',
    TERCEIRO: '3',
    QUARTO: '4'
  };

  return mapping[bimestre] || bimestre;
};

export default formatarBimestre;
