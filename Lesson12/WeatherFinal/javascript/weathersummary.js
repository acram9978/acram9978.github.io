window.addEventListener("load",()=>{

    const requestURL = "https://api.openweathermap.org/data/2.5/weather?zip=83263,us&units=imperial&appid=603298645e2ee84ae69d5d0bde481376";
    fetch(requestURL)
        .then((response)=>{
            return response.json();
        })
        .then((jsonObject)=> {
            console.log(jsonObject);
            let weather = jsonObject;
            console.log(weather["weather"][0]["description"])
            document.querySelector("#current").textContent = weather["weather"][0]["main"];
            document.querySelector("#humidity").textContent = weather["main"]["humidity"];
            document.querySelector("#windSpeed").textContent = weather["wind"]["speed"];
            document.querySelector("#highs").textContent = weather["main"]["temp_max"];
        });

});