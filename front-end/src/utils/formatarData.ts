const formatarData = (data: Date | null) => {
  if (data) {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    };
    return new Date(data).toLocaleDateString('pt-BR', options);
  }
};

export default formatarData;
