window.addEventListener("load",()=>{

    const requestURL = "https://api.openweathermap.org/data/2.5/weather?zip=84095,us&units=imperial&appid=603298645e2ee84ae69d5d0bde481376";
    fetch(requestURL)
        .then((response)=>{
            return response.json();
        })
        .then((jsonObject)=> {
            console.log(jsonObject);
            let weather = jsonObject;
            console.log(weather["weather"][0]["description"])
            let partTwo = document.createElement("section");
            partTwo.innerHTML = 
            `
            <br>
            <p><b>Current Weather</b></p>
            <p>Current Temperature: <b>${weather["main"]["temp"]}</b></p>
            <p>Humidity: <b>${weather["main"]["humidity"]}</b></p>
            <p>Wind Speed: <b>${weather["wind"]["speed"]}</b></p>
            <p>Temperature Highs: <b>${weather["main"]["temp_max"]}</b></p>
            <hr>`;
            console.log(partTwo);
            //document.querySelector("#current").textContent = weather["main"]["temp"];
            //document.querySelector("#humidity").textContent = weather["main"]["humidity"];
            //document.querySelector("#windSpeed").textContent = weather["wind"]["speed"];
            //document.querySelector("#highs").textContent = weather["main"]["temp_max"];

            document.querySelector(".jrt").appendChild(partTwo);


        });


    const requestURL2 = "https://api.openweathermap.org/data/2.5/weather?zip=83440,us&units=imperial&appid=603298645e2ee84ae69d5d0bde481376";
    fetch(requestURL2)
        .then((response)=>{
            return response.json();
        })
        .then((jsonObject)=> {
            console.log(jsonObject);
            let weather = jsonObject;
            console.log(weather["weather"][0]["description"])
            let partTwo = document.createElement("section");
            partTwo.innerHTML = 
            `
            <br>
            <p><b>Current Weather</b></p>
            <p>Current Temperature: <b>${weather["main"]["temp"]}</b></p>
            <p>Humidity: <b>${weather["main"]["humidity"]}</b></p>
            <p>Wind Speed: <b>${weather["wind"]["speed"]}</b></p>
            <p>Temperature Highs: <b>${weather["main"]["temp_max"]}</b></p>
            <hr>`;
            console.log(partTwo);
            //document.querySelector("#current").textContent = weather["main"]["temp"];
            //document.querySelector("#humidity").textContent = weather["main"]["humidity"];
            //document.querySelector("#windSpeed").textContent = weather["wind"]["speed"];
            //document.querySelector("#highs").textContent = weather["main"]["temp_max"];

            document.querySelector(".rit").appendChild(partTwo);


        });

    const requestURL3 = "https://api.openweathermap.org/data/2.5/weather?q=Manila&units=imperial&appid=603298645e2ee84ae69d5d0bde481376";
    fetch(requestURL3)
        .then((response)=>{
            return response.json();
        })
        .then((jsonObject)=> {
            console.log(jsonObject);
            let weather = jsonObject;
            console.log(weather["weather"][0]["description"])
            let partTwo = document.createElement("section");
            partTwo.innerHTML = 
            `
            <br>
            <p><b>Current Weather</b></p>
            <p>Current Temperature: <b>${weather["main"]["temp"]}</b></p>
            <p>Humidity: <b>${weather["main"]["humidity"]}</b></p>
            <p>Wind Speed: <b>${weather["wind"]["speed"]}</b></p>
            <p>Temperature Highs: <b>${weather["main"]["temp_max"]}</b></p>
            <hr>`;
            console.log(partTwo);
            //document.querySelector("#current").textContent = weather["main"]["temp"];
            //document.querySelector("#humidity").textContent = weather["main"]["humidity"];
            //document.querySelector("#windSpeed").textContent = weather["wind"]["speed"];
            //document.querySelector("#highs").textContent = weather["main"]["temp_max"];

            document.querySelector(".mpt").appendChild(partTwo);


        });


    const requestURL4 = "https://api.openweathermap.org/data/2.5/weather?zip=97035,us&units=imperial&appid=603298645e2ee84ae69d5d0bde481376";
    fetch(requestURL4)
        .then((response)=>{
            return response.json();
        })
        .then((jsonObject)=> {
            console.log(jsonObject);
            let weather = jsonObject;
            console.log(weather["weather"][0]["description"])
            let partTwo = document.createElement("section");
            partTwo.innerHTML = 
            `
            <br>
            <p><b>Current Weather</b></p>
            <p>Current Temperature: <b>${weather["main"]["temp"]}</b></p>
            <p>Humidity: <b>${weather["main"]["humidity"]}</b></p>
            <p>Wind Speed: <b>${weather["wind"]["speed"]}</b></p>
            <p>Temperature Highs: <b>${weather["main"]["temp_max"]}</b></p>
            <hr>`;
            console.log(partTwo);
            //document.querySelector("#current").textContent = weather["main"]["temp"];
            //document.querySelector("#humidity").textContent = weather["main"]["humidity"];
            //document.querySelector("#windSpeed").textContent = weather["wind"]["speed"];
            //document.querySelector("#highs").textContent = weather["main"]["temp_max"];

            document.querySelector(".pot").appendChild(partTwo);


        });

});