function predictDisease(){

let result = document.getElementById("result");

result.innerHTML = "Analyzing leaf image...";

setTimeout(function(){

result.innerHTML = "Possible Disease: Leaf Spot";

},2000);

}