
/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

Snack2

Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

 //Snack 1
 
let bici = [
    {
      nome : 'Facile',
      peso : 20
    },
    {
      nome : 'Medio',
      peso : 15
    },
    {
      nome : 'Dificile',
      peso : 30
    },
    
  ];
  let biciLeggera = bici[0];

  for (let i = 0; i < bici.length - 1; i++){
  
      if (bici[i].peso < biciLeggera.peso){
          biciLeggera = bici[i];
      }
  }
  console.log(bici);
  console.log(biciLeggera);
  
  // Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
  
  let {nome, peso} = biciLeggera;
  console.log(
  `La ${nome} con il peso di ${peso}Kg è la bici più leggera`)


  //Snack2

  let squadra = [
    {
        nome: 'roma',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'inter',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'milan',
        punti: 0,
        falli: 0,
    },
  ]

  //generiamo i numeri nel posto di punti e falli

  function generaUnNumerCasuale(min, max){
    return Math.floor(Math.random() * (max - min) + min);
  }

// Punti fatti e falli subiti
  for (let i = 0; i < squadra.length; i++){
    squadra[i].punti = generaUnNumerCasuale(1,30);
    squadra[i].falli = generaUnNumerCasuale(20,50);
  }
console.log(squadra);


//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


let nuovaSquadra = [];
for (let i = 0; i < squadra.length; i++){
   let {nome, falli} = squadra[i];
   nuovaSquadra.push({nome, falli});
}
console.log(nuovaSquadra);