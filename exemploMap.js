const personagens = [
    { nome: 'Arthur Dent', especie: 'Humano', profissao: 'Ingênio' },
    { nome: 'Ford Prefect', especie: 'Betelgeusiano', profissao: 'Pesquisador' },
  { nome: 'Zaphod Beeblebrox', especie: 'Betelgeusiano', profissao: 'Presidente da Galáxia' },
    { nome: 'Trillian', especie: 'Humano', profissao: 'Jornalista' },
    { nome: 'Marvin', especie: 'Androide Paranóide', profissao: 'Robô' },
  ];
 
  // Cria um novo array com as informações dos personagens formatadas
  const personagensFormatados = personagens.map(function(personagem) {
    return {
      nome: personagem.nome.toUpperCase(),
      especie: personagem.especie,
      profissao: personagem.profissao.toLowerCase(),
    };
  });
 
  console.log(personagensFormatados);
