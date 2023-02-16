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

    item.innerHTML = `<img src = "${element.image}" /><h2>${element.name}</h2>`;

    lista.appendChild(item);
  });
};