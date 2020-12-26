// jshint esversion:6
var elements = document.getElementsByClassName("core-rail");

for (var i = 0; i < elements.length; i++) {
  elements.item(i).innerHTML = '';
}

// removeElementsByClass("core-rail");

// function removeElementsByClass(className){
//     var elements = document.getElementsByClassName(className);
//     while(elements.length > 0){
//         elements[0].parentNode.removeChild(elements[0]);
//     }
// }
