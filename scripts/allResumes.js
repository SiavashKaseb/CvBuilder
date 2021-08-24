// document.getElementById("navbar").addEventListener("mouseenter", func);

// document.getElementById("icons").addEventListener("mouseenter", func);

// document.getElementById("navbar").addEventListener("mouseleave", func2);

// document.getElementById("menu-icon").addEventListener("mouseenter", func);

function func() {
    document.getElementById("navbar").style.left = "-110vh";
    document.getElementById("icons").className += " fade-in";
}

function func2() {
    document.getElementById("navbar").style.left = "-170vh";
    document.getElementById("icons").className -= " fade-in";
}

$.ajax({
    type: "GET",
    url: "https://cors-anywhere.herokuapp.com/http://162.55.12.72:3002/Resume/allresume",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
        Authorization: localStorage.getItem("access_token"),
    },
    success: function(response) {
        console.log(response);
        
    },
    error: function(xhr, ajaxOptions, thrownError) {
        alert("dobare load beshe");
        console.log(localStorage.getItem("access_token"))

    },
});