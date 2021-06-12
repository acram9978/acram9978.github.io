

let button = document.querySelector("#button");
button.addEventListener("click", function() {
    window.location.href = "thanks.html"
});

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}