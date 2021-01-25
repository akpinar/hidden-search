var button = document.getElementById("button");

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
