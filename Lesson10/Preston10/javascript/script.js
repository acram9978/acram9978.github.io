window.addEventListener('load', () =>{
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

    //window.onresize = () => {if (window.innerWidth > )}
    });

let currentDate = new Date();
let year = currentDate.getFullYear();
document.querySelector(".copy-year").textContent = year;

let time = currentDate.getTime();
let hour = currentDate.getHours();
let min = currentDate.getMinutes();


if (hour > 12){
    hour = (hour - 12) + ":" + min + " " + "PM";
} else if (hour==0) {
    hour = (hour + 12) + ":" + min + " " + "AM";
} else{
    hour = hour + ":" + min + " " + "AM";
};

let day = currentDate.getDate();
let month = currentDate.getMonth();

if (month == 0){
    month = "January";
} else if (month == 1) {
    month = "February";
} else if (month == 2) {
    month = "March";
} else if (month == 3) {
    month = "April";
} else if (month == 4) {
    month = "May";
} else if (month == 5) {
    month = "June";
} else if (month == 6) {
    month = "July";
} else if (month == 7) {
    month = "August";
} else if (month == 8) {
    month = "September";
} else if (month == 9) {
    month = "October";
} else if (month == 10) {
    month = "November";
} else if (month == 11) {
    month = "December";
} ;

let fullDate = hour + " " + month + " " + day + ", " + year; 
document.querySelector(".date").textContent = fullDate;


