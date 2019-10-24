// onload event handler
window.onload = rotate;

// variable declaration
var theCount = 0;
var exBanner = new Array("images/banner1.jpg", "images/banner2.jpg","images/banner3.jpg");

// function to rotate banner images
function rotate() {
    theCount++;
    if (theCount == exBanner.length){
        theCount = 0;
    }
    document.getElementById("exBanner").src = exBanner[theCount];

    setTimeout(rotate, 3 * 1000);
}
