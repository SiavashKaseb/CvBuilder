let i = 1;

document.getElementById("btn").onclick = function () {
  if (i === 1) {
    let check = checkNext();
    if (check) {
      document.getElementById("first").style.marginLeft = "-25%";
      i++;
    }
  } else if (i === 2) {
    let check = checkNext();
    if (check) {
      document.getElementById("first").style.marginLeft = "-50%";
      i++;
    }
  } else if (i == 3) {
    let check = checkNext();
    if (check) {
      document.getElementById("first").style.marginLeft = "-75%";
      i++;
    }
  }
  func();
};

function checkNext() {
  flag = true;
  if (i == 1) {
    if (document.getElementById("phone").value.length == 0) {
      flag = false;
    }
  } else if (i == 2) {
    if (document.getElementById("field").value.length == 0) {
      flag = false;
    }
  } else if (i == 3) {
    if (document.getElementById("title").value.length == 0) {
      flag = false;
    }
  }
  if (!flag) {
    document.getElementById("popup-txt").innerHTML =
      "You must fill in the entries marked with a '*'.";
    document.getElementById("popup").style.visibility = "visible";
    return false;
  } else {
    return true;
  }
}

document.getElementById("btn1").onclick = function () {
  if (i === 2) {
    document.getElementById("first").style.marginLeft = "0%";
    i--;
  } else if (i === 3) {
    document.getElementById("first").style.marginLeft = "-25%";
    i--;
  } else if (i == 4) {
    document.getElementById("first").style.marginLeft = "-50%";
    i--;
  }
  func();
};

document.getElementById("p1").style.background =
  "linear-gradient(lightblue, white)";
let func = function () {
  switch (i) {
    case 1:
      {
        document.getElementById("text").textContent = "Personal";
        document.getElementById("p1").style.background =
          "linear-gradient(lightblue, white)";
        document.getElementById("p2").style.background = "white";
        document.getElementById("p3").style.background = "white";
        document.getElementById("p4").style.background = "white";
      }
      break;
    case 2:
      {
        document.getElementById("text").textContent = "Education";
        document.getElementById("p1").style.background =
          "linear-gradient(lightblue, white)";
        document.getElementById("p2").style.background =
          "linear-gradient(lightblue, white)";
        document.getElementById("p3").style.background = "white";
        document.getElementById("p4").style.background = "white";
      }
      break;
    case 3:
      {
        document.getElementById("text").textContent = "Occupational";
        document.getElementById("p1").style.background =
          "linear-gradient(lightblue, white)";
        document.getElementById("p2").style.background =
          "linear-gradient(lightblue, white)";
        document.getElementById("p3").style.background =
          "linear-gradient(lightblue, white)";
        document.getElementById("p4").style.background = "white";
      }
      break;
    case 4:
      {
        document.getElementById("text").textContent = "Skills";
        document.getElementById("p1").style.background =
          "linear-gradient(lightblue, white)";
        document.getElementById("p2").style.background =
          "linear-gradient(lightblue, white)";
        document.getElementById("p3").style.background =
          "linear-gradient(lightblue, white)";
        document.getElementById("p4").style.background =
          "linear-gradient(lightblue, white)";
      }
      break;
  }
};

let j = 0;
document.getElementById("add-skill").onclick = function () {
  console.log("here");
  switch (j) {
    case 0:
      {
        document.getElementById("skill1").style.visibility = "visible";
        j++;
      }
      break;
    case 1:
      {
        document.getElementById("skill2").style.visibility = "visible";
        j++;
      }
      break;
    case 2:
      {
        document.getElementById("skill3").style.visibility = "visible";
        j++;
      }
      break;
    case 3:
      {
        document.getElementById("skill4").style.visibility = "visible";
        j++;
      }
      break;
    case 4:
      {
        document.getElementById("skill5").style.visibility = "visible";
        j++;
      }
      break;
  }
  if (j == 5) {
    document.getElementById("popup-txt").innerHTML =
      "The maximum number of skills is 5.";
    document.getElementById("popup").style.visibility = "visible";
  }
};

document.getElementById("cancel").onclick = function () {
  document.getElementById("popup").style.visibility = "hidden";
};

function make() {
  let birthday = document.getElementById("age").value;
  let AboutProgrammer = document.getElementById("about").value;
  let city = document.getElementById("city").value;
  let phone = document.getElementById("phone").value;

  let grade = document.getElementById("grade").value;
  let record = document.getElementById("record").value;
  let field = document.getElementById("field").value;

  let title = document.getElementById("title").value;
  let workplace = document.getElementById("workplace").value;

  let skill1 = document.getElementById("skill1").value;
  let skill2 = document.getElementById("skill2").value;
  let skill3 = document.getElementById("skill3").value;
  let skill4 = document.getElementById("skill4").value;
  let skill5 = document.getElementById("skill5").value;
  let skills = [skill1, skill2, skill3, skill4, skill5];

  $.ajax({
    type: "POST",
    url: "https://cors-anywhere.herokuapp.com/http://162.55.12.72:3002/Resume/CreateAndUpdate",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With",
      Authorization: localStorage.getItem("access_token"),
    },
    data: {
      Birthday: birthday,
      AboutProgrammer: AboutProgrammer,
      Job: title,
      WorkPlace: workplace,
      Major: field,
      Grade: grade,
      EducationalBackground: record,
      Skills: skills,
      PhoneNumber: phone,
      City: city,
    },
    success: function (response) {
      // jQuery(#usergrid").trigger("reloadGrid");
      // clear();
      console.log(response);
      //   text.innerText = response.Name;
      // window.localStorage.setItem("access_token", response.token);
      window.location.replace("../pages/Dashboard.html");
    },
    error: function (xhr, ajaxOptions, thrownError) {
      alert("bug");
    },
  });
}
