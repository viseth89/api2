const baseURL = "https://pokeapi.co/api/v2/"
const query1 = "pokemon/charmander"
let filmList1 = document.getElementById("film-list-1")

fetch(baseURL + query1)
    .then(res => res.json())
    .then(json => {
        let myArr = json.stats.map(pokemon => {
            return {
                stat: pokemon.stat.name,
                base_stat: pokemon.base_stat
            }
        })
        console.log(myArr)

        let filmList = document.getElementById("pokemon-name-1")
        // work on capitalize

        filmList.replaceWith(json.name)
        displayResults1(myArr)
    })

let filmList = document.getElementById("film-list")
let query = "https://pokeapi.co/api/v2/pokemon/pikachu"

fetch(query) // Reaches out to the internet to get data
    .then(res => res.json()) // Returns on the json data
    .then(json => {
        console.log(json)
        console.log('viseth')
        console.log(json.stats)
        console.log(json.name)
        console.log('array')
        let myArr = json.stats.map(pokemon => { // Make a new array reducing the items
            return {
                stat: pokemon.stat.name,
                base_stat: pokemon.base_stat
            }
        })

        console.log(myArr)

        let pokemon_name_2 = document.getElementById("pokemon-name-2")
        let filmList = document.getElementById("pokemon-name-2")

        filmList.replaceWith(json.name)

        displayResults(myArr, filmList1)
    })


function displayResults(pokemons, list) {

    pokemons.map(pokemon => { 
        let pokemonLi = document.createElement('li')
        pokemonLi.className = "list-group-item"                                 
        pokemonLi.innerText = `${pokemon.stat } ${pokemon.base_stat}` 
        filmList.appendChild(pokemonLi)
   
    })
}

function displayResults1(pokemons) {

    pokemons.map(pokemon => { 
        let pokemonLi = document.createElement('li')
        pokemonLi.className = "list-group-item"                                 
        pokemonLi.innerText = `${pokemon.stat } ${pokemon.base_stat}` 
        filmList1.appendChild(pokemonLi)
   
    })
}