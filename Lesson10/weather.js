const url = "https://api.openweathermap.org/data/2.5/weather?zip=83440&appid=603298645e2ee84ae69d5d0bde481376&units=imperial";


fetch (url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject){
        let weather = jsonObject["weather"];
        console.log(weather);

        for(let i = 0; i< weather.length; i++) {
            let container = document.createElement("div");
            let p1 = document.createElement("p");
        
        }
    });


