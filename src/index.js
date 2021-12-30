let now = new Date();

let days=[
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];
let day = days[now.getDay()];

let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

let month = months[now.getMonth()];

let date = now.getUTCDate();
let hour = now.getHours();
let minutes = now.getMinutes();

console.log(`Today is ${day}, ${month} ${date}, ${hour}:${minutes}`);

let h4 = document.querySelector("h4");
h4.innerHTML= `Today, ${day}, ${month} ${date}, ${hour}:${minutes}`;

// FormelAenderung Week5 homework


function search(event)
{event.preventDefault();
let apiKey= "d33b97a34ddb5f2f68fc2d4628e9869a";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?";
let city= document.querySelector("#city-input").value;
axios.get(`${apiUrl}q=${city}&APPID=${apiKey}&units=metric`).then(showTemperature);
};

let form = document.querySelector("#form-input");
form.addEventListener("submit", search)

function showTemperature (response)
{
let searchInput = document.querySelector("#city-input");
let h1 = document.querySelector("h1");
h1.innerHTML = `${searchInput.value}`;

let temperature = Math.round(response.data.main.temp);
let h3 = document.querySelector("h3");
    h3.innerHTML= (temperature);
};



















