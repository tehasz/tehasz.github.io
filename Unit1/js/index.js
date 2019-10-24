// onload event handler
window.onload = rotate;

// variable declaration
var theCount = 0;

var banner1 = newImage();
var banner2 = newImage();
var banner3 = newImage();

banner1.src = '/images/banner1.jpg';
banner2.src = '/images/banner2.jpg';
banner3.src = '/images/banner3.jpg';

var banner = [];
banner.push(banner1);
banner.push(banner2);
banner.push(banner3);

// function to rotate banner images
function rotate() {
    theCount++;
    if (theCount === banner.length){
        theCount = 0;
    }
    document.getElementById("exBanner").src = banner[theCount];

    setTimeout(rotate, 3 * 1000);
}
