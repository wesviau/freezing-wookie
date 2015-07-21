var arr = [];
function addItem() {
arr.push(prompt("What would you like to add to the array?"));
//document.getElementById("something").innerHTML = arr[0];
document.getElementById("red").innerHTML = arr[0];
document.getElementById("green").innerHTML = arr[1];
document.getElementById("blue").innerHTML = arr[2];
document.getElementById("black").innerHTML = arr;
console.log(arr);
}

