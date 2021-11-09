const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/movies', function (req, res) {
    let arr = ['la la land', 'titanic', 'harry potter', 'vampire diaries', 'orginals']
 
    res.send(arr)
});

router.get('/abc/:index', function (req, res) {

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let i = req.params.index

    if(i>fruits.length-1){
        res.send("index out of range")
    }
    else{
        res.send(fruits[i])
    }
});


router.get('/films', function (req, res) {
    let arr = [ {
                   "id": 1,
                  "movies": "The Shining"
                }, 
                
                {
                    "id": 2,
                    "movies": "Incendies"
                }, {
                    "id": 3,
                    "movies": "Rang de Basanti"
                }, {
                    "id": 4,
                    "movies": "Finding Demo"
                }]
 
    res.send(arr)
});

router.get('/Bollywood/:filmid', function (req, res) {

    let arr = [ {
        id: 1,
        movies: "The Shining"
     }, 
     
     {
         id: 4,
         movies: "Incendies"
     }, {
         id: 3,
         movies: "Rang de Basanti"
     }, {
          id: 6,
         movies: "Finding Demo"
     }]
    
    let i = req.params.filmid
    //console.log(typeof i)

    const film = arr.filter(x => x.id == i)
    console.log(film)
    if (film.length == 0){
        res.send("Not found")
    }

    else{
        res.send(film)
    }




});

module.exports = router;