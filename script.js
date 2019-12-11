
var btn = document.querySelector('button');
var pre  = document.querySelector('pre');

btn.onclick = async e => {
  let resultat;
  try {
    let response = await fetch('/roll');
    console.log('nach Fetch',response);
    resultat = await response.text()
    console.log('nach JSON()',resultat);
  } catch(e){
    resultat = 'ein fehler ist aufgetreten'
  }
  pre.innerText = resultat
}
