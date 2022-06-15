let listaPersonagensElement = document.getElementById("listaPersonagens")

async function getPersonagens() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json()

  const personagens = data.results;

  personagens.forEach(personagem => {
    let novoElemento = document.createElement('li')

    novoElemento.classList.add('card')

    novoElemento.innerHTML = `
      <figure>
        <img class="imgCard" src=${personagem.image} alt="">
      </figure>
      <div class="informaçoes">
        <div>
          <h2>${personagem.name}</h2>
        </div>
        <h3>${personagem.status} - ${personagem.species}</h3>
        <div class="info2">
          <h3>Last known location: </h3>
          <p>${personagem.location.name}</p>
          <h3>First seen in: </h3>
          <p>Total Rickall</p>
        </div>
      </div>
    `

    listaPersonagensElement.appendChild(novoElemento)
  })
}

getPersonagens()