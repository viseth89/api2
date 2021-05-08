var apiKey = "&api_key=FL63s2cwyPDUMADH4H3xvx3vlk3IN98e"
var GIPHY_KEY = 'FL63s2cwyPDUMADH4H3xvx3vlk3IN98e'
var api = "http://api.giphy.com/v1/gifs/search?"

fetch('https://api.giphy.com/v1/gifs/search?q=ryan&api_key=FL63s2cwyPDUMADH4H3xvx3vlk3IN98e&limit=10')
    .then(res=>res.json())
    .then(json=>{
        // console.log(json)
        // console.log(json.data)
        let array = json.data
        // console.log(array)

        var piclist = ""
        let giphyList = document.getElementById('giphy')

        for(var index in array)
            console.log(array[index])
            console.log(array[index].images.original.url)
            pic = array[index].images.original.url
            piclist += "<img width='200px' src='"+pic+"'/>"
            // giphyList.innerHTML = piclist

        // console.log(json.data[0])

        // console.log(json.data[0].images.original.url)

        let image = json.data[0].images.original.url


        // giphyList.replaceWith(src=image)
        let output = "<img width='200px' src='"+image+"'/>";
        console.log(piclist)

        giphyList.innerHTML = output
        giphyList.innerHTML = piclist
    })



function giphySearch(keyword) {
    return fetch("https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${GIPHY_KEY}")
}

function main(searchKeyword) {
    giphySearch(searchKeyword)
    .then(response => console.log(response))
}

