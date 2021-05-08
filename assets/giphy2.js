var apiKey = "&api_key=FL63s2cwyPDUMADH4H3xvx3vlk3IN98e"
var GIPHY_KEY = 'FL63s2cwyPDUMADH4H3xvx3vlk3IN98e'
var api = "http://api.giphy.com/v1/gifs/search?"

fetch('https://api.giphy.com/v1/gifs/search?q=ryan&api_key=FL63s2cwyPDUMADH4H3xvx3vlk3IN98e&limit=5')
    .then(res=>res.json())
    .then(json=>{
        // console.log(json)
        // console.log(json.data)
        let array = json.data
        console.log(array)
        var gifarray = ""
        for(names in array){
            console.log(array[names].url)
            var gifurl = array[names].url
            gifarray += "<img width='200px' src='"+gifurl+"'/>"
            console.log(array[names])
            console.log('gifarray')
            console.log(gifarray)
        }

        let giphyList = document.getElementById('giphy')
        giphyList.innerText = gifarray


    })
