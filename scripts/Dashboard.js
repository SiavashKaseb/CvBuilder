function SetTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m)
    s = checkTime(s)
    let timeNow = document.getElementById("time")
    setTimeout(SetTime, 1000);
    timeNow.innerHTML = `${h}:${m}:${s}`
    timeNow.style.fontSize = "45px"
    timeNow.style.marginLeft = "4em"

}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}


function toggle_light_mode() {
    var app = document.getElementsByTagName("BODY")[0];
    let box = document.getElementById("glass")
    let eys = document.getElementById("eys")
    let dashbord = document.getElementById("allDasboard")
    let bod = document.getElementById("bod")
    if (localStorage.lightMode == "dark") {
	localStorage.lightMode = "light";
	app.setAttribute("light-mode", "light");
    box.style.backgroundColor = "#f2f2fc"
    eys.src = "../icons/eye.svg"
    dashbord.style.backgroundColor = "#ecedf7"
    bod.style.background = "linear-gradient(163deg, rgba(89,215,180,1) 35%, rgba(179,132,237,1) 71%)"


    

    } else {
	localStorage.lightMode = "dark";
	app.setAttribute("light-mode", "dark");
    let box = document.getElementById("glass")
    box.style.backgroundColor = "#141516"
    eys.src = "../icons/eye-closed-white.svg"
    dashbord.style.backgroundColor = "#696969"
    bod.style.background = "#141516"
    
    
    
    }		
}
