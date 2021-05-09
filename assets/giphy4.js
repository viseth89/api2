var apiKey = "&api_key=FL63s2cwyPDUMADH4H3xvx3vlk3IN98e"
var GIPHY_KEY = 'FL63s2cwyPDUMADH4H3xvx3vlk3IN98e'
var apiURL = "http://api.giphy.com/v1/gifs/search?q="
var limitVal = "&limit=3";

const main = document.querySelector('.results')


const form = document.querySelector('.form');
const searchInput = document.getElementById('search')




const apiUrl = apiURL+apiKey

console.log(apiUrl)


function createImages(gifs) {
    for(const gif of gifs){
        const img = document.createElement('img');
        const gifSrc = gif.images.fixed_height.url;

        img.src = gifSrc
        img.alt = "Gif"
        img.classList.add('results-gif')

        main.append(img)
    }
}


// async trial
async function getGifs(event) {
    event.preventDefault();

    const searchInputValue = searchInput.value;
    const gifyURL = apiURL + searchInputValue + apiKey + limitVal
    const gifyURL2 = `${apiURL}${searchInputValue}${apiKey}${limitVal}`
    console.log(gifyURL)
    console.log('gifyURL')
    console.log(gifyURL2)
    console.log('gifyURL2')

    const response = await fetch(gifyURL);
    const data = await response.json()
    const gifData = await data.data;

    createImages(gifData);

}

form.addEventListener("submit", getGifs)



/* 
prevent default is required to prevent the submit button from performining default actions

*/
