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

    item.innerHTML = `<img src = "${element.image}" /><section class="content-text"><h2 class="nome">${element.name}</h2><span class="status">${element.status} - ${element.species}</span> <div class="location"><span class="fixed">Last known location:</span><span>${element.location.name}</span></div></section>`;

    lista.appendChild(item);
  });
};
