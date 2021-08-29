// clock
const hourPointer = document.querySelector('.hour'),
    minutePointer = document.querySelector('.minute'),
    secondPointer = document.querySelector('.second'),
    transform = getTransform();
const datePointer = document.querySelector('.date');

function updateClock() {
    var now = new Date(),
        second = now.getSeconds() * 6,
        minute = now.getMinutes() * 6 + (second / 60),
        hour = (((now.getHours() % 12) / 12) * 360) + (minute / 12);
    datePointer.innerHTML = now.getDate()
    hourPointer.style[transform] = `rotate(${hour}deg)`;
    minutePointer.style[transform] = `rotate(${minute}deg)`;
    secondPointer.style[transform] = `rotate(${second}deg)`;
}
setInterval(updateClock, 1000);


function getTransform() {
    var style = document.createElement('div').style,
        transform,
        vendor;
    if (undefined !== style[vendor = 'webkitTransform']) {
        transform = vendor;
    }
    if (undefined !== style[vendor = 'msTransform']) {
        transform = vendor;
    }
    if (undefined !== style[vendor = 'transform']) {
        transform = vendor;
    }
    return transform;
}






$.ajax({
    type: "GET",
    url: `https://cors-anywhere.herokuapp.com/http://162.55.12.72:3002/${localStorage.getItem("User_Name")}`,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",

    },
    success: function(response) {
        console.log(response);

        console.log()

        let birthDate = new Date(response.Birthday);
        let difference = Date.now() - birthDate.getTime();
        let ageDate = new Date(difference);
        let calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

        let sk = response.Skills[0].split(" ")
        let birthday = document.getElementById("age");
        let AboutProgrammer = document.getElementById("about");
        let city = document.getElementById("city");
        let phone = document.getElementById("phone");

        let grade = document.getElementById("grade");
        let record = document.getElementById("record");
        let field = document.getElementById("study-field");

        let title = document.getElementById("job-title");
        let workplace = document.getElementById("workplace-name");

        let sk1 = document.getElementById("skil1")
        let sk2 = document.getElementById("skil2")
        let sk3 = document.getElementById("skil3")
        let sk4 = document.getElementById("skil4")
        let sk5 = document.getElementById("skil5")
        birthday.innerText = `Age : ${calculatedAge}`
            // AboutProgrammer.innerText = ``
        city.innerText = `City : ${response.City}`
        phone.innerText = `Phone : ${response.PhoneNumber}`
        grade.innerText = `Grade : ${response.Grade}`
        field.innerText = `Field of study : ${response.Major}`
        title.innerText = `Job title : ${response.Job}`
        workplace.innerText = `Workplace name : ${response.WorkPlace}`

        sk1.innerText = sk[0]
        sk2.innerText = sk[1]
        sk3.innerText = sk[2]
        sk4.innerText = sk[3]
        sk5.innerText = sk[4]

    },
    error: function(xhr, ajaxOptions, thrownError) {
        alert("dobare load beshe");
        console.log(xhr)
        console.log(ajaxOptions)
        console.log(thrownError)

    },
});