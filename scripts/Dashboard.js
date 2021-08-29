

let text = document.getElementById("boxName")
let text2 = document.getElementById("boxAbout")
let text3 = document.getElementById("boxPhone")
let text4 = document.getElementById("boxJob")
let text5 = document.getElementById("admin_name")


let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function() {
  sidebar.classList.toggle("active");
  if(sidebar.classList.contains("active")){
  sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
}else
  sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}

$.ajax({
    type: "GET",
    url: "https://cors-anywhere.herokuapp.com/http://162.55.12.72:3002/Resume/Dashboard",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
        Authorization: localStorage.getItem("access_token"),
    },
    success: function(response) {
      
        console.log(response);

        text.innerText = response.Name
        text5.innerText = `User : ${response.Name}`
        
        if (response.Job !== undefined) {
            text2.innerText = response.AboutProgrammer
        } else {
            text2.innerText = "You should make your resume first"
        }

        if (response.AboutProgrammer !== undefined) {
            text3.innerText = response.PhoneNumber
        } else {
            text3.innerText = "You should make your resume first"
        }
        if (response.AboutProgrammer !== undefined) {
            text4.innerText = response.Job
        } else {
            text4.innerText = "You should make your resume first"
        }
        

    },
    error: function(xhr, ajaxOptions, thrownError) {
        console.log(xhr , ajaxOptions , thrownError)

    },
});