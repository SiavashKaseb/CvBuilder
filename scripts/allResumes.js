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

let box = document.getElementById("allCard");

function cardMaker(name, about , b) {
  let CardModel = `<div data-aos="fade-right">
<div class="wrap">

    <div id="${b}" class="card">
        <div class="card-liner">
            <figure>
                <img src="../img/fakeProf/fakeProf1.jpeg" alt="" />
            </figure>
            <div class="card--social">
                <ul>
                    <li class="instagram">
                        <a href="#" class="insta"><img src="../icons/instagram.svg" alt=""></a>
                    </li>
                    <li class="codepen">
                        <a href="#"><img src="../icons/linkedin.svg" alt=""></a>
                    </li>
                </ul>
            </div>
            <div class="card--title">
                <h3>${name}</h3>
                <p></p>
            </div>
            <div class="card--desc">
                <hr />
                <p>${about}</p>
            </div>
            <div class="card--btn">
                <a class="test" href="./showResume.html">
                    <!-- <span class="moreinfo">More Info</span> -->
                    See full
                </a>
            </div>
        </div>
    </div>

</div>
</div>
`;
  box.innerHTML += CardModel;
}

$.ajax({
  type: "GET",
  url: "https://cors-anywhere.herokuapp.com/http://162.55.12.72:3002/allresume",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With",
  },
  success: function (response) {
    for (let i = 0; i < response.length; i++) {
      if (response[i].AboutProgrammer !== undefined) {
        cardMaker(response[i].Name, response[i].AboutProgrammer , i);
      } else {
        cardMaker(response[i].Name, "About is not entered by the user." , i);
      }
      }

      $( ".card" ).click(function() {
            window.localStorage.setItem("User_Name", response[this.id].Name);
          console.log(response[this.id].Name)
          window.location.replace("../pages/showResume.html");
      });
      
    console.log(response);
  },
  error: function (xhr, ajaxOptions, thrownError) {
    alert("dobare load beshe");
    console.log(localStorage.getItem("access_token"));
  },
});
