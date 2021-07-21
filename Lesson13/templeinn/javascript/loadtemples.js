

window.addEventListener("load",()=>{

    const requestURL = "javascript/temples2.json";
    fetch(requestURL)
        .then((response)=>{
            return response.json();
        })
        .then((jsonObject)=> {
            console.log(jsonObject);
            Object.entries(jsonObject).forEach(([key,temple])=>{
                buildTempleCard(temple);

            });

        });
});

function buildTempleCard(temple) {
    console.log(temple);
    let card = document.createElement("section");
    card.classList.add("temple");
    card.classList.add(temple.code);
    card.innerHTML = `<h2>${temple.name}</h2>
                      <img loading="lazy" src="${temple.imageurl}" alt="${temple.name}" >
                      <p>Phone: <b>${temple.phone}</b></p>
                      <p>Email: <b>${temple.email}</b></p>
                      <p>Address: <b>${temple.address1} ${temple.city}, ${temple.state}</b></p>
                      <p>Services: <b>${temple.services}</b></p>
                      <br>
                      <p>Ordinance Schedule: <b>${temple.ordinanceschedule}</b></p>
                      <p>Session Schedule: <b>${temple.sessionschedule}</b></p>
                      <p>Closure: <b>${temple.closures}</b></p>
                      <br>
                      <p>First President: <b>${temple.presidents[0]} 1st of ${temple.presidents.length}</b></p>
                      <p>Current President: <b>${temple.presidents[temple.presidents.length-1]}</b></p>
                      <p>About: <b>${temple.history}</b></p>`;
    document.querySelector("#temple-container").appendChild(card);
}

