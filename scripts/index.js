let i = 0
setInterval(function() {
    if (i === 0) {
        document.getElementById("radio2").click();
        i++
    } else {
        document.getElementById("radio1").click();
        i--;
    }

}, 5000);

let j = 0
setInterval(function() {
    document.getElementById("img1").style.transform = "rotate(" + j + "deg)";
    document.getElementById("img2").style.transform = "rotate(" + j + "deg)";
    if (j === 360) {
        j = 30
    } else {
        j += 30
    }

}, 500);



document.getElementById("navbar").addEventListener("mouseenter", func)

document.getElementById("icons").addEventListener("mouseenter", func)

document.getElementById("navbar").addEventListener("mouseleave", func2)

document.getElementById("menu-icon").addEventListener("mouseenter", func)

function func() {
    document.getElementById("navbar").style.left = "-110vh";
    document.getElementById('icons').className += ' fade-in';

}



function func2() {
    document.getElementById("navbar").style.left = "-170vh";
    document.getElementById('icons').className -= ' fade-in';

}