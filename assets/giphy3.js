"use strict";

const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=FL63s2cwyPDUMADH4H3xvx3vlk3IN98e&rating=pg&q=';
const limitVal = 5;
const main = document.querySelector(".results");
const form = document.querySelector(".form");
const searchInput = document.getElementById("search");

function clearPreviousResults() {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

function createImages(gifs) {
    for (const gif of gifs) {
        const img = document.createElement("img");
        const gifSrc = gif.images.fixed_height.url;

        img.src = gifSrc;
        img.alt = "Gif";
        img.classList.add("results-gif");
        
        main.append(img);
    }
}

async function getGifs(event) {
    event.preventDefault();
    // clearPreviousResults();

    const searchInputValue = searchInput.value;
    const gifyUrl = `${apiUrl}${searchInputValue}&limit=${limitVal}`;
    const response = await fetch(gifyUrl, { mode: "cors" });
    const data = await response.json();
    const gifData = await data.data;

    createImages(gifData);
    searchInput.value = "";
}

form.addEventListener("submit", getGifs);