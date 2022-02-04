"use strict";

const section = document.querySelector(".leagues-list");
let HEADERS = {
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin',
  'Content-Type': 'application/json', //optional
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Max-Age': '8640'
}

//This solves the "No ‘Access-Control-Allow-Origin’ header is present on the requested resource."

HEADERS['Access-Control-Allow-Origin'] = '*'
HEADERS['Vary'] = 'Origin'

exports.handler = async function (event, context) {
  try {
    if (event.httpMethod === 'OPTIONS') {
      return { statusCode: '204', HEADERS }
    }
    if (event.httpMethod === 'POST') {
        const body = JSON.parse(event.body)
        //Your code goes here

       return {
         statusCode: 200,
         body: 'Success',
         HEADERS
       } 
 
    }
    return {
      statusCode: 401,
      HEADERS
    }
  } catch (e) {
    console.error(e)
    return {
      statusCode: 500,
      body: e.toString()
    }
  }
}

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


