// const url = "https://api.openweathermap.org/data/2.5/weather?zip=83440&appid=603298645e2ee84ae69d5d0bde481376&units=imperial";


// fetch (url)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (jsonObject){
//         let weather = jsonObject["main"];
//         console.log(weather);

//         for(let i = 0; i< weather.length; i++) {
//             let container = document.createElement("todaysweather");
//             let p1 = document.createElement("p");
//             let p2 = document.createElement("p");
//             let p3 = document.createElement("p");
//             let p4 = document.createElement("p");
//             let p5 = document.createElement("p");

//             p1.textContent = weather["temp"];

            

//         }
//     });

window.addEventListener("load", (event) => {
const requestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=83440&appid=96f881dc52b0a77480e60ae03cff87e0&units=imperial'

fetch(requestURL)
.then(function (response) {
    return response.json()
})
.then(function (rexburg_data) {
    console.table(rexburg_data)

    let ul = document.getElementById("todaysweather")
    let name = document.createElement('li')
    let temp = document.createElement('li')
    let feelsLike = document.createElement('li')
    let high = document.createElement('li')
    let low = document.createElement('li')

    let main = rexburg_data['main']

    name.innerHTML = "City: " + rexburg_data.name
    temp.innerHTML = "Temperature: " + main.temp
    feelsLike.innerHTML = "Feels like: " + main.feels_like
    high.innerHTML = "High: " + main.temp_max
    low.innerHTML = "Low: " + main.temp_min

    console.log(ul);
    console.log(name);
    ul.appendChild(name)
    ul.appendChild(temp)
    ul.appendChild(high)
    ul.appendChild(low);
    })
});


window.addEventListener("load", (event) => {
const requestURL = 'https://api.openweathermap.org/data/2.5/forecast?zip=83440&units=imperial&appid=96f881dc52b0a77480e60ae03cff87e0'
fetch(requestURL)
.then(function (response) {
    return response.json()
})
.then(function (fiveday_weather) {
    console.table(fiveday_weather)
    let weatherInfo = fiveday_weather["list"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    // let date = new Date();
    // let day = getDay();
    // console.log(day);

    for(let i = 0; i < 4; i++) {
        //console.log(weatherInfo[i]);

        let container = document.querySelector(".fiveday");
        let ul2 = document.createElement("ul");
        let date = document.createElement("li");
        let temp = document.createElement("li");
        let high = document.createElement("li");
        let low = document.createElement("li");
        let icon = document.createElement("li");


        date.innerHTML = weatherInfo[i]["dt_txt"];
        date.innerHTML = 
        "Date: " + weatherInfo[i]["dt_txt"].split(" ", 1);
        temp.innerHTML = "Temperature: " + weatherInfo[i]["main"]["temp"];
        high.innerHTML = "High: " + weatherInfo[i]["main"]["temp_min"];
        low.innerHTML = "Low: " + weatherInfo[i]["main"]["temp_max"];
        icon.innerHTML = "Icon: " + weatherInfo[i]["weather"][0]["icon"];
        console.log(weatherInfo[i]["weather"]);

        container.appendChild(ul2);
        ul2.appendChild(date);
        ul2.appendChild(temp);
        ul2.appendChild(high);
        ul2.appendChild(low);
        ul2.appendChild(icon);

        //             let container = document.createElement("todaysweather");
        //             let p1 = document.createElement("p");
        //             let p2 = document.createElement("p");
        //             let p3 = document.createElement("p");
        //             let p4 = document.createElement("p");
        //             let p5 = document.createElement("p");
        
        //             p1.textContent = weather["temp"];
        
                    
        
        //         }

    }
    })
});