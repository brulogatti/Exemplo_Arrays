const personagens = [
    { nome: 'Arthur Dent', especie: 'Humano', profissao: 'Ingênio' },
    { nome: 'Ford Prefect', especie: 'Betelgeusiano', profissao: 'Pesquisador' },
    { nome: 'Zaphod Beeblebrox', especie: 'Betelgeusiano', profissao: 'Presidente da Galáxia' },
    { nome: 'Trillian', especie: 'Humano', profissao: 'Jornalista' },
    { nome: 'Marvin', especie: 'Androide Paranóide', profissao: 'Robô' },
  ];
  
  personagens.forEach(function(personagem) {
    console.log(personagem.nome + ' é um ' + personagem.especie);
  });
  