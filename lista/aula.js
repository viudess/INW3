let titulo = document.querySelector('h1');
titulo.innerHTML = "Filmes são incriveis";

const btn1 = document.querySelector('button');
const listaFilmes = document.querySelector('#listaFilmes');

btn1.addEventListener('click',()=>{
    const campoUsuario = document.querySelector('#filmeInput').value;
    const itemLista = document.createElement('li');
    listaFilmes.append(itemLista);
    itemLista.innerHTML = `<strong>${campoUsuario}</strong>`;
    //muda o estilo
    //itemLista.style.background = 'red'
    // add uma classe
    //itemLista.style.add('ativo')
    // liga/desliga uma classe
    //itemLista.classList.toggle('ativo')
})