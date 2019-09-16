// https://api-content.ingresso.com/v0/sessions/63087129/partnership/home
/*
  Procedimento que busca os dados da api, em seguida desestrutura o objeto data da responta
  e envia apenas os dados que serão usados como parametros para duas funções
  que são responsaveis por renderizar as informações no HTML.

  Estava tendo problemas com CORS e por isso resolvi usar uma api como proxy.
*/
const getData = async () => {
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const response = await axios.get(
    `${cors}https://api-content.ingresso.com/v0/sessions/63087129/partnership/home`
  );

  const { event, theater } = response.data;

  renderEventData(event);
  renderTheaterData(theater);

  //descomentar para testar modal
  // event.inPreSale = true;

  //se for true, exibe modal
  if (event.inPreSale) {
    setTimeout(function() {
      showModal();
    }, 2000);
  }
};

/*
  Assim que o documento termina de ser carregado, ele executa a função de buscar os dados
*/

window.onload = function() {
  getData();
};
