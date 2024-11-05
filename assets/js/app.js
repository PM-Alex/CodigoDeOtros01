const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// correcion name -> .name para seleccionar la clase del documento html
const $n = document.querySelector('.name');
// correccion #blog -> .blog debido a que en el documento html es una clase y no un id
const $b = document.querySelector('.blog');
// Se elimina la línea const $l = document.querySelector('.location'); debido a la ausencia de una etiqueta con la clase 'location' en el documento html
// const $l = document.querySelector('.location');

// Se añade la funcion async, try y catch
async function displayUser(username) {
  try {
    $n.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);

    // Se cambia console.log(data) -> const data = await response.json()
    const data = await response.json();
    //Se sustituyen las '' por ``
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    // Se elimina $l.textContent = '${data.location}'; pues nunca es definida
    // $l.textContent = '${data.location}';

  } catch (err) {
    handleError(err);

  }

}


function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // Se cambia n -> $n
  $n.textContent = `Algo salió mal: ${err.message}`
}

displayUser('stolinski')