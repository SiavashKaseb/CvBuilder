const signUpbtn = document.getElementById("signUp");
const signInbtn = document.getElementById("signIn");
const container = document.getElementById("container");

signUpbtn.addEventListener( "click" , () => {
    container.classList.add("right-panel-active");
})

signInbtn.addEventListener( "click" , () => {
    container.classList.remove("right-panel-active");
})

// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// function switchTheme(e){
//     if (e.target.checked){
//         document.documentElement.setAttribute('data-theme' , 'dark');
//         localStorage.setItem('theme' , 'dark');
//  let form = document.getElementById("container")
//  form.style.backgroundColor = "#333333"
//     }
//     else{
//         document.documentElement.setAttribute('data-theme' , 'light');
//         localStorage.setItem('theme' , 'light');
//         let form = document.getElementById("container")
//         form.style.backgroundColor = "#ffffff"

//     }
// }
// toggleSwitch.addEventListener('change' , switchTheme , false)




// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//     }    
// }

// toggleSwitch.addEventListener('change', switchTheme, false);



function data (){
    let email = document.getElementById("upEmail").value
    let Fname = document.getElementById("upName").value
    let password = document.getElementById("upPassword").value
    console.log(email , Fname , password)
    let users = {
        Email : email , 
        Name : Fname,
        Password : password
    }
    console.log(users)
    let http = new XMLHttpRequest()
    http.open("POST" )
    http.send()
}


