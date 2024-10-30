// var p = document.getElementsByTagName("p");
// var btn = document.getElementsByClassName("button");

// var p1 = p[0];

// function hy() {
 
//     p1.innerHTML = `Things are never quite as scary when you've got a best friend.” ...
//         A true friend never gets in your way unless you happen to be going down.” ...
//         To the world you may be just one person, but to one person you may be the world.” ...
//         Distance means so little, when someone means so much.”! `
//         btn[0].innerHtml = `Reload`};

function cap() {
    var text = document.getElementById("text");
    var textVal = text.value;
    text.value = textVal.toUpperCase();
}

function small() {
    var text = document.getElementById("text");
    var textVal = text.value;
    text.value = textVal.toLowerCase();

 }

    function hum() {
        var text = document.getElementById("text");
        //  var textVal = text.value;
        //  text.value = textVal.toUpperCase();
         text.style.color ="white"
    text.style.fontStyle = "italic"
     }
    
    function large() {
        var text = document.getElementById("text");
        //  var textVal = text.value;
        //  text.value = textVal.toLowerCase(); 
    text.style.fontWeight = "bold"
     text.style.color = "white"
}


