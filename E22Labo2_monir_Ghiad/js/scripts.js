let chemin = "../interets/";
/*
let listeInteret = [
  {"id":1,"link":"musique.html"},
  {"id":2,"link":"loisir.html"},
  {"id":3,"link":"musique.html"},
  {"id":4,"link":"loisir.html"}
];
*/
let listeInteret = [
  "camping","voyage","cinema","chasse"
]
let listeSite = [
  "interets/camping.html","interets/voyage.html","interets/cinema.html","interets/chasse.html"
]
let remplirInteretDansSelect = () =>{
  document.getElementById('idframe').src = listeSite[0];
  let selInteret = document.getElementById('selInteret');
  for(let unInteret of listeInteret){
    selInteret.options[selInteret.options.length] = new Option(unInteret);
  }
}
let traiterInterert = () => {

  let selInteret = document.getElementById('selInteret');
  let idInteret = selInteret.options[selInteret.selectedIndex].text;
  
  let index = listeInteret.findIndex( interet => interet == idInteret);
 
  document.getElementById('idframe').style.display="block";
  document.getElementById('idframe').src = listeSite[index];


}
