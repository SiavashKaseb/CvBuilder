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
    if (i < 10) { i = "0" + i };
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

let text = document.getElementById("Box-Name")
let text2 = document.getElementById("Box-Name2")
let text3 = document.getElementById("Box-Name3")



$.ajax({
    type: "GET",
    url: "https://cors-anywhere.herokuapp.com/http://162.55.12.72:3002/Resume/Dashboard",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
        Authorization: localStorage.getItem("access_token"),
    },
    success: function(response) {
        // jQuery("#usergrid").trigger("reloadGrid");
        // clear();
        console.log(response);

        text.innerText = response.Name
        if (response.AboutProgrammer !== undefined) {
            text2.innerText = response.AboutProgrammer
        } else {
            text2.innerText = "You should make your resume first"
        }

        if (response.AboutProgrammer !== undefined) {
            text3.innerText = response.PhoneNumber
        } else {
            text3.innerText = "You should make your resume first"
        }

        // window.localStorage.setItem("access_token", response.token);
        // window.location.replace("./index2.html");
    },
    error: function(xhr, ajaxOptions, thrownError) {
        alert("dobare load beshe");

    },
});