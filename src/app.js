

const { default: axios } = require("axios");


  const main = async() => {
    try{ 

    const item = await axios.get('https://restcountries.com/v2/all')
    const res = item.data
    console.log(res);
    const k = res.map((countries) => {
      // const munt = checkCurrency(countries.currencies)
      const classn = className(countries.region)
      const lan = lanName(countries.languages)

     
      
  

      return `<li>
  
      <img  class="flag" src=${countries.flag}></img> 
      <span class= ${classn}>${countries.name}:</span>
     <span>Has a population of [${countries.population}] people</span>
    </br>
       <span>The capital is ${countries.capital} and you can pay with  </span>
     </br>
       <span>languages is ${lan}</span>
       </li>`
    }).join(""); 
    let ul = document.getElementById('ullist')
    ul.innerHTML = k
  } catch(error){
    console.log(error)
  }

  } 
main();



function className(region){
  let p = "";
  if(region === 'Asia'){
    p = "asia"
  }
  else if(region === "Europe"){
    p = 'europe'
  }
  else if(region === "Americas"){
    p = 'americas'
  }
  else if(region === "Oceania"){
    p = 'oceania'
  }
  else if(region === "Africa"){
    p = 'africa'
  
  }
  return p;


  
}
function checkCurrency(geld){
  const money =geld.map((item) => {
    return `<p>${item.name}</P>`
  }).join("")
    return money; 
  

}
function lanName(taal){
 let lan = taal.map((nl) => {
   return `<p>${nl.name}</P>`

  }).join("")
  return lan;
}


    


