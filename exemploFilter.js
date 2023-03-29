const personagens = [
    { nome: 'Arthur Dent', especie: 'Humano', profissao: 'Ingênio' },
    { nome: 'Ford Prefect', especie: 'Betelgeusiano', profissao: 'Pesquisador' },
    { nome: 'Zaphod Beeblebrox', especie: 'Betelgeusiano', profissao: 'Presidente da Galáxia' },
    { nome: 'Trillian', especie: 'Humano', profissao: 'Jornalista' },
    { nome: 'Marvin', especie: 'Androide Paranóide', profissao: 'Robô' },
  ];
  
  // Cria um novo array com apenas os personagens humanos
  const personagensHumanos = personagens.filter(function(personagem) {
    return personagem.especie === 'Humano';
  });
  
  console.log(personagensHumanos);
  
  
