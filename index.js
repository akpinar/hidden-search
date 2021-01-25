var button = document.getElementById("button");
// var div = document.getElementById("div")

// button.addEventListener("click", function () {
//     if (div.style.display === "none") {
//         div.style.display = "block"
//     }
//     else {
//         div.style.display = "none"
//     }
// })

$("button").click(function(){
    $("input").toggle();
    if (button.className==="active"){
        button.className="button"
    }
    else
    {
        button.className="active"
    }
});
