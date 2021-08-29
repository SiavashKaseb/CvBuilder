const signUpbtn = document.getElementById("signUp");
const signInbtn = document.getElementById("signIn");
const container = document.getElementById("container");

signUpbtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInbtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});


function testbt() {
  let Email = document.getElementById("upEmail");
  let Fname = document.getElementById("upName");
  let Password = document.getElementById("upPassword");

  console.log(Password.value);
  if (Password.value == "") {
    Swal.fire({
      icon: 'error',
      text : 'Fill the password please!'
    })
  } else if (Password.value.lenght < 8) {
    Swal.fire({
      icon: 'error',
      text : 'Password length must be atleast 8 characters'
    })
    return false;
  } else if (Password.value.lenght > 15) {
    Swal.fire({
      icon: 'error',
      text : 'Password length must be atleast 8 characters'
    })
  } else {
    console.log("ok")
  }
  $.ajax({
    type: "POST",
    url: "https://cors-anywhere.herokuapp.com/http://162.55.12.72:3002/SignUp",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With",
    },
    data: {
      Name: Fname.value,
      Email: Email.value,
      Password: Password.value,
    },

    success: function (response) {
      console.log(response.token);
      Swal.fire({
        icon: "success",
        title : "Welcome",
        text : "Details saved successfully!!!"
      })
      window.localStorage.setItem("access_token", response.token);
      setTimeout(function () {
        window.location.replace("../pages/Dashboard.html");
      }, 950)
    },
    error: function (xhr, ajaxOptions, thrownError) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${xhr} , ${ajaxOptions} , ${thrownError}`,
        footer: '<a href="../pages/guide.html" style="color:blue;">Why do I have this issue?</a>'
      }).then(function () {
        window.location.reload()
      }) 
    },
  });
  event.preventDefault();
}



function login() {
  let userName = document.getElementById("UserEmail");
  let Pass = document.getElementById("UserPassword");
  console.log(userName.value, Pass.value);

  $.ajax({
    type: "POST",
    url: "https://cors-anywhere.herokuapp.com/http://162.55.12.72:3002/Login",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With",
    },
    data: {
      Username: userName.value,
      Password: Pass.value,
    },

    success: function (response) {
      
      Swal.fire({
        icon: 'success',
        title: 'Welcome Back',
        text: "You have successfully logged in",
       
      })
      window.localStorage.setItem("access_token", response.token);
      
      setTimeout(function () {
        window.location.replace("../pages/Dashboard.html");        
      },950)
      
    },
    error: function (xhr, ajaxOptions, thrownError) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${xhr} , ${ajaxOptions} , ${thrownError}`,
        footer: '<a href="../pages/guide.html" style="color:blue;">Why do I have this issue?</a>'
      }).then(function () {
        window.location.reload()
      })      
    },
  });
  event.preventDefault();
}
