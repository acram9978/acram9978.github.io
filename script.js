window.addEventListener('load', (event)=>{
    const lastupdate = document.querySelector('#lastupdate');
    lastupdate.textContent = document.lastModified;

    const copyr = document.querySelector('#currentyear');
    copyr.textContent = new Date().getFullYear();
})

/*
let d = new Date();

let year = d.getFullYear();

document.getElementById("currentyear").innerHTML = year; 
*/