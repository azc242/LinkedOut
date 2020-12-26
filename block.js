// jshint esversion:6

const Http = new XMLHttpRequest();
const url='https://api.thecatapi.com/v1/images/search';
Http.open("GET", url, true);
Http.responseType = "json";
// Http.setRequestHeader('Content-Type', 'application/json');
Http.send();
Http.onreadystatechange = (e) => {
  console.log("printed");
  console.log(Http.response[0].url);
};

var elements = document.getElementsByClassName("core-rail");
http://thecatapi.com/api/images/get?format=src&type=gif
for (var i = 0; i < elements.length; i++) {
  elements.item(i).innerHTML = '';
}
