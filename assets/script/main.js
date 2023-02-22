const frmPesquisa = document.querySelector("form");

frmPesquisa.onsubmit = (ev) => {
  ev.preventDefault();

  const pesquisa = ev.target.pesquisa.value;

  if (pesquisa == "") {
    alert("Preencha o campo!");
    return;
  }

  fetch(`https://rickandmortyapi.com/api/character/?name=${pesquisa}`)
    .then((result) => result.json())
    .then((json) => carregaLista(json));
};

const carregaLista = (json) => {
  const lista = document.querySelector("div.lista");

  lista.innerHTML = "";

  json.results.forEach((element) => {
    let item = document.createElement("div");
    item.classList.add("item");

    item.innerHTML = `<img src = "${element.image}" />`;

    let contentText = document.createElement("section");
    contentText.classList.add("content-text");

    contentText.innerHTML = `<h2 class="nome text">${element.name}</h2><div class="status double-text"><span class="fixed">Status:</span><span class="text">${element.status} - ${element.species}</span></div> <div class="location double-text"><span class="fixed">Last known location:</span><span class="text">${element.location.name}</span></div>`;

    lista.appendChild(item);
    item.appendChild(contentText);
  });
};
