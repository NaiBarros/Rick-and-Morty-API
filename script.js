let nomeElement = document.getElementById("nome")


async function getPersonagem() {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const data = await response.json()

  personagens = data.results;

}

getPersonagem()