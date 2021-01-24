var button = document.getElementById("button");
var input = document.getElementById("input");
var div = document.getElementById("div")

button.addEventListener("click", function () {
    if (div.style.display === "none") {
        div.style.display = "block"
    }
    else {
        div.style.display = "none"
    }
})