const url = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);
        const townData = jsonObject["towns"];
        for (let i = 0; i < townData.length; i++ ) {
            if ( townData[i].name == "Soda Springs" || townData[i].name == "Fish Haven" || townData[i].name == "Preston" ) {
                let card = document.createElement("section");
                let card2 = document.createElement("div")
                let card3 = document.createElement("div");
                let h3 = document.createElement("h3");
                let h4 = document.createElement("h4");
                let p = document.createElement("p");
                let p1 = document.createElement("p");
                let p2 = document.createElement("p");
                let img = document.createElement("img");

                h3.textContent = townData[i].name;
                h4.textContent = townData[i].motto;
                p.textContent = "Year Founded: " + townData[i].yearFounded;
                p1.textContent = "Population: " + townData[i].currentPopulation;
                p2.textContent = "Annual Rain Fall: " + townData[i].averageRainfall;
                img.setAttribute("src", "images3/" + townData[i].photo)

                let container = document.querySelector(".town-info");
                container.appendChild(card);

                card.appendChild(card2);
                card.appendChild(card3);

                card2.appendChild(h3);
                card2.appendChild(h4);
                card2.appendChild(p);
                card2.appendChild(p1);
                card2.appendChild(p2);
                card3.appendChild(img);


                if ( townData[i].name == "Soda Springs" ) {
                    card.classList.add("soda");
                }
                else if ( townData[i].name == "Fish Haven" ) {
                    card.classList.add("fish");
                }
                else if ( townData[i].name == "Preston" ) {
                    card.classList.add("preston");
                }
                
            }

        }
    })



