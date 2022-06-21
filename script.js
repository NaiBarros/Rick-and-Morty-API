let listaPersonagensElement = document.getElementById("listaPersonagens");
let numeroDaPagina = document.getElementById("numeroDaPagina");

let linkProximaPagina = "";
let linkPaginaAnterior = "";
let paginaAtual = 1;

async function getPersonagens() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  console.log(data);

  const personagens = data.results;

  linkProximaPagina = data.info.next;

  personagens.forEach((personagem) => {
    let novoElemento = document.createElement("li");

    novoElemento.classList.add("card");

    novoElemento.innerHTML = `
      <img src=${personagem.image} alt="">
      <div class="informaçoes">
        <div>
          <h2>${personagem.name}</h2>
        </div>
        <h3>${personagem.status} - ${personagem.species}</h3>
        <div class="info2">
          <h3>Last known location: </h3>
          <p>${personagem.location.name}</p>
          <h3>Origin: </h3>
          <p>${personagem.origin.name}</p>
        </div>
      </div>
    `;

    listaPersonagensElement.appendChild(novoElemento);
  });
}

async function getProximaPagina() {
  const response = await fetch(linkProximaPagina);
  const data = await response.json();

  const personagens = data.results;

  linkProximaPagina = data.info.next;
  linkPaginaAnterior = data.info.prev;

  paginaAtual = paginaAtual + 1;

  numeroDaPagina.innerText = paginaAtual;

  listaPersonagensElement.innerHTML = "";

  personagens.forEach((personagem) => {
    let novoElemento = document.createElement("li");

    novoElemento.classList.add("card");

    novoElemento.innerHTML = `
      <img src=${personagem.image} alt="">
      <div class="informaçoes">
        <div>
          <h2>${personagem.name}</h2>
        </div>
        <h3>${personagem.status} - ${personagem.species}</h3>
        <div class="info2">
          <h3>Last known location: </h3>
          <p>${personagem.location.name}</p>
          <h3>Origin: </h3>
          <p>${personagem.origin.name}</p>
        </div>
      </div>
    `;

    listaPersonagensElement.appendChild(novoElemento);
  });
}

async function getPaginaAnterior() {
  if (!linkPaginaAnterior) {
    return;
  }
  const response = await fetch(linkPaginaAnterior);
  const data = await response.json();

  const personagens = data.results;

  linkProximaPagina = data.info.next;
  linkPaginaAnterior = data.info.prev;

  paginaAtual = paginaAtual - 1;

  numeroDaPagina.innerText = paginaAtual;

  listaPersonagensElement.innerHTML = "";

  personagens.forEach((personagem) => {
    let novoElemento = document.createElement("li");

    novoElemento.classList.add("card");

    novoElemento.innerHTML = `
      <img src=${personagem.image} alt="">
      <div class="informaçoes">
        <div>
          <h2>${personagem.name}</h2>
        </div>
        <h3>${personagem.status} - ${personagem.species}</h3>
        <div class="info2">
          <h3>Last known location: </h3>
          <p>${personagem.location.name}</p>
          <h3>Origin: </h3>
          <p>${personagem.origin.name}</p>
        </div>
      </div>
    `;

    listaPersonagensElement.appendChild(novoElemento);
  });
}

getPersonagens();
