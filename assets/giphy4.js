var apiKey = "&api_key=FL63s2cwyPDUMADH4H3xvx3vlk3IN98e"
var GIPHY_KEY = 'FL63s2cwyPDUMADH4H3xvx3vlk3IN98e'
var apiURL = "http://api.giphy.com/v1/gifs/search?q="
var limitVal = "&limit=3";




const form = document.querySelector('.form');
const searchInput = document.getElementById('search')




const apiUrl = apiURL+apiKey

console.log(apiUrl)

// async trial
async function getGifs(event) {
    event.preventDefault();

    const searchInputValue = searchinput.value;
    const gifyURL = apiURL + apiKey + limitVal + api
    console.log(gifyURL)
}

form.addEventListener("submit", getGifs)



/* 
prevent default is required to prevent the submit button from performining default actions

*/
