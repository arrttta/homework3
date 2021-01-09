const fizzbuzz = document.getElementById("fb");
const letsGo = document.getElementById("start");
letsGo.addEventListener("click", generate);
const customLetsGo = document.getElementById("custom");
customLetsGo.addEventListener("click", customGenerate);
const reset = document.getElementById("reset");
reset.addEventListener("click", resetFunction);


function resetFunction () {
    while (fizzbuzz.firstChild) {
        fizzbuzz.removeChild(fizzbuzz.firstChild);
    }
}

function generate() {
resetFunction();
for (let n = 1; n <= 100; n++) {     
        let createDiv = document.createElement("div");
        let createP = document.createElement("p");
        createDiv.appendChild(createP);
        fizzbuzz.appendChild(createDiv).setAttribute("id", "myid" + n);
        if (n % 3 === 0 && n % 5 === 0) {                              
            createP.appendChild(document.createTextNode(n + " = FIZZ BUZZ!"));
            fizzbuzz.appendChild(createDiv).setAttribute("class", "fizzbuzz"); 
        } else if (n % 3 === 0) {   
            createP.appendChild(document.createTextNode(n + " = FIZZ!"));
            fizzbuzz.appendChild(createDiv).setAttribute("class", "fizz");
        } else if (n % 5 === 0) {
            createP.appendChild(document.createTextNode(n + " = BUZZ!"));
            fizzbuzz.appendChild(createDiv).setAttribute("class", "buzz");
        }
        else {
            createP.appendChild(document.createTextNode(n));
            fizzbuzz.appendChild(createDiv).setAttribute("class", "number");
        }
    }
}


function customGenerate() {
    resetFunction();
    let fizzNumber = Number(document.getElementById("fizzNumber").value);
    let buzzNumber = Number(document.getElementById("buzzNumber").value);
    let userNumberMin = Number(document.getElementById("numberMin").value);
    let userNumberMax = Number(document.getElementById("numberMax").value);
    if (fizzNumber === 0 || buzzNumber === 0) {
        alert("Dividing by 0 is a crime! You really want to feel like a gangster, don't you...");
    }
    else if (userNumberMax < userNumberMin) {
        alert("Please, make the maximum value bigger than the minimum!");
    }
    else {
        for(userNumberMin; userNumberMin <= userNumberMax; userNumberMin++){
            let createCustomDiv = document.createElement("div");
            let createCustomP = document.createElement("p");
            createCustomDiv.appendChild(createCustomP);
            fizzbuzz.appendChild(createCustomDiv).setAttribute("id", "myCustId" + userNumberMin);
            if (userNumberMin % fizzNumber !== 0 && userNumberMin % buzzNumber !== 0){
                fizzbuzz.appendChild(createCustomDiv).setAttribute("class", "number");
                createCustomP.appendChild(document.createTextNode(userNumberMin));         
            }
        else if (userNumberMin % fizzNumber === 0 && userNumberMin % buzzNumber !== 0) {
			fizzbuzz.appendChild(createCustomDiv).setAttribute("class", "fizz");       
            createCustomP.appendChild(document.createTextNode(userNumberMin + " = FIZZ!"));
        }
        else if (userNumberMin % buzzNumber === 0 && userNumberMin % fizzNumber !== 0){
            fizzbuzz.appendChild(createCustomDiv).setAttribute("class", "buzz");
            createCustomP.appendChild(document.createTextNode(userNumberMin + " = BUZZ!"));
        }
        else {
            fizzbuzz.appendChild(createCustomDiv).setAttribute("class", "fizzbuzz");
            createCustomP.appendChild(document.createTextNode(userNumberMin + " = FIZZ BUZZ!"));
        }
        }   
}
}


    