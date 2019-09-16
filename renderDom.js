/*
  renderEventData = Procedimento responsável por renderizar os dados do filme que vem do objeto 'event'
  como parametro pela função getData.
*/

const renderEventData = event => {
  document.getElementById('modal').innerHTML = `
  Não perca a pré venda do filme ${event.title}.
  Ela acontecerá no dia ${event.premiereDate.dayAndMonth}/${event.premiereDate.year} às ${event.premiereDate.hour}.
  `;

  document.getElementById('title').innerHTML = event.title;
  document.getElementById('originalTitle').innerHTML = event.originalTitle;
  document.getElementById('synopsis').innerHTML = event.synopsis;

  const backPoster = document.getElementById('background-poster');
  backPoster.style.backgroundImage = `url(${event.images[1].url}`;

  const poster = document.getElementById('poster');
  poster.setAttribute('src', event.images[0].url);
  poster.setAttribute('alt', `Poster do filme ${event.title}`);

  const trailer = document.getElementById('trailer');
  trailer.setAttribute('src', `http:${event.trailers[0].embeddedUrl}`);
  trailer.setAttribute('alt', `Trailer do filme ${event.title}`);
  trailer.classList.add('trailer-container');

  const genreContainer = document.getElementById('genre');
  const genreList = document.getElementById('genre-list');

  /*
    Percorre o array de generos do filme, cria elementos (li) que são aninhados ao
    elemento pai (ul) e recebem o nome do genero.
  */
  event.genres.map(gen => {
    const genre = document.createElement('li');
    genreList.appendChild(genre);
    genre.classList.add('genre');
    genre.innerHTML = gen;
  });

  const rating = document.createElement('div');
  genreContainer.appendChild(rating);
  rating.classList.add('age');
  rating.innerHTML = event.contentRating.split(' ')[0];

  document.getElementById('cast').innerHTML = event.cast;
  document.getElementById('director').innerHTML = event.director;
  document.getElementById('country').innerHTML = event.countryOrigin;
  document.getElementById('distributor').innerHTML = event.distributor;
};

/*
  renderTheaterData = Procedimento responsável por renderizar os dados do cinema que vem do objeto 'theater'
  como parametro pela função getData.
*/

const renderTheaterData = theater => {
  document
    .getElementById('theater-logo')
    .setAttribute('src', theater.images[0].url);
  document.getElementById('theater-name').innerHTML = `${theater.name}`;
  document.getElementById(
    'theater-address'
  ).innerHTML = `${theater.address}, ${theater.number} ${theater.addressComplement} - ${theater.neighborhood} - ${theater.cityName}`;

  const roomsContainer = document.getElementById('rooms-container');

  /*
    Percorre o array de salas e cria os elementos que são as salas e os horarios
  */
  theater.rooms.map(th => {
    const room = document.createElement('div');
    roomsContainer.appendChild(room);
    room.classList.add('room');

    const roomName = document.createElement('span');
    room.appendChild(roomName);
    roomName.classList.add('room-name');
    roomName.innerHTML = th.name;

    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('hours-container');
    room.appendChild(hoursContainer);

    /*
      Estrutura de repetição apenas pra criar os horarios das salas.
      (não consegi encontrar essa informação na resposa do endpoint)
    */
    for (let i = 0; i < 6; i++) {
      const hour = document.createElement('button');
      hoursContainer.appendChild(hour);
      hour.classList.add('hour');
      hour.innerHTML = '12:00';
    }
  });

  document.getElementById('wrap').classList.add('container-opacity');
};

/*
  Funções para controle do modal
*/
const showModal = () => {
  const fade = document.getElementById('fade');
  const modal = document.getElementById('modal-container');
  fade.style.display = 'block';
  modal.classList.add('modal-container-show');
};

const closeModal = () => {
  const fade = document.getElementById('fade');
  const modal = document.getElementById('modal-container');
  fade.style.display = 'none';
  modal.classList.remove('modal-container-show');
};
