// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9],
];
//Iterates thru Planets and names them too.
var selectPlanets = document.getElementById("planets");

planets.reverse();

planets.forEach(function(element) {
    var selectElement = document.createElement("option");
    var planetNameOptions = document.createTextNode(element[0]);
    selectElement.appendChild(planetNameOptions);
    selectPlanets.appendChild(selectElement);
})

// Changes weight inputed to new weight on planet.
function calculateWeight(userWeightValue, planetName) {
    var planetName = document.getElementById("planets").selectedIndex;
    var userWeightValue = document.getElementById("user-weight").value;
    var gravity = planets[planetName][1];
    var newWeight = userWeightValue * gravity;
    return newWeight;
  }

  // JS to HTML and returns a message.
  function clickHandleEvent(userWeightValue, planetName) {
    var userWeightValue = document.getElementById("user-weight").value;
    var planetName = document.getElementById("planets").value;
    var result = calculateWeight(userWeightValue, planetName);
    document.getElementById("output").innerHTML = 'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!';
  }
