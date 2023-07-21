const corpinhomaromba =  document.querySelector('body');

function modomorte() {
  let mano =  document.querySelector('#pq');
  corpinhomaromba.classList.toggle('fundo-branco')
  
  if (mano.innerText == "NÃO PRECISA FAZER ISSO") {
    mano.innerText = "por quê"}
  else {
    mano.innerText = "não precisa fazer isso"}}


let nome_span = document.querySelector("#eu");

async function nome() {
  let pegapramimporfavor = await fetch("https://api.github.com/users/Renatata-H");
  let sextafeiratreze = await pegapramimporfavor.json();

  nome_span.innerText = " "+sextafeiratreze.login;
}

nome()