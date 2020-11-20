// Population growth by Peter Oh

// HTML Elements
let hypoEl = document.getElementById("hypo");
let adjEl = document.getElementById("adj");
let oppEl = document.getElementById("opp");
let calcEl = document.getElementById('calc');
let typeEl = document.getElementById('type');
let outputEl = document.getElementById('output');

// Event Listener
calcEl.addEventListener("click", calcNumber);

// Event Function
function calcNumber() {
    let hypo = hypoEl.value;
    let adj = adjEl.value;
    let opp = oppEl.value;
    let calc = typeEl.value;

    let n;

    // Process and Output
    outputEl.innerHTML = lengthGet(hypo, adj, opp, calc);
}

function lengthGet(hypo, adj, opp, calc) {

    if (calc == 'SIN') {
        n = (opp / hypo);

        console.log("sin");
    } else if (calc == 'COS') {
        n = (adj / hypo);

        console.log("cos");
    } else if (calc == 'TAN') {
        n = (opp / adj);

        console.log("tan");
    }

    n = Math.asin(n) * 180 / Math.PI;

    if (hypo < opp || hypo < adj) {
        n = "The hypotenuse cannot be smaller than the other lengths."
    }

    return n;
}