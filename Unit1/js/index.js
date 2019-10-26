// onload event handler
window.onload = rotate;

// variable declaration
var theCount = 0;
var banner1 = new Image();
var banner2 = new Image();
var banner3 = new Image();

banner1.src = "images/banner1.jpg";
banner2.src = "images/banner2.jpg";
banner3.src = "images/banner3.jpg";

var banner = [];
banner.push(banner1);
banner.push(banner2);
banner.push(banner3);



//banner.push("images/banner1.jpg");
//banner.push("images/banner2.jpg");
//banner.push("images/banner3.jpg");

// function to rotate banner images
function rotate(oldChild) {
    theCount++;
    if (theCount == banner.length){
        theCount = 0;

    }
    document.getElementById("rotation").innerHTML = "";


    document.getElementById("rotation").appendChild(banner[theCount]);

    setTimeout(rotate, 3 * 1000);
}
