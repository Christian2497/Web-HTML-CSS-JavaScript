"use strict";

const section = document.querySelector(".leagues-list");

function getLeagues(id){
    fetch(`https://apiclient.besoccerapps.com/scripts/api/api.php?key=01da72449d29a7702aba403ec3fb4e98&tz=Europe/Madrid&format=json&req=categories&filter=all
    `)
    .then((response) => response.json())
    .then((data) => {
      data.category.map((oneLeague) => {
        const league = document.createElement("div");  
        if(oneLeague.id == id){
          league.innerHTML = `
          <div class="leagues">
          <a href="${oneLeague.alias}.html"><img src="${oneLeague.logo}" alt="${oneLeague.name}"/>
          <h3>${oneLeague.name}</h3></a>
          </div>`
          return section.appendChild(league)
        }
      })
    })
    .catch(err => console.log(err))
  }

  getLeagues("1")
  getLeagues("10") 
  getLeagues("107")
  getLeagues("7")
  getLeagues("8")
  getLeagues("16")


  
/* async function getLeaguesAA() {

}  */

/* getLeaguesAA(); */


