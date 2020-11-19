// Population growth by Peter Oh

// HTML Elements
let hypoEl = document.getElementById("hypo");
let adjEl = document.getElementById("adj");
let oppEl = document.getElementById("opp");
let calcEl = document.getElementById('calc');
let outputEl = document.getElementById('output');

// Event Listener
calcEl.addEventListener("select", calcNumber);

// Event Function
function calcNumber() {
    let hypo = hypoEl.value;
    let adj = adjEl.value;
    let opp = oppEl.value;
    let calc = calcEl.value;

    // Process and Output
    outputEl.innerHTML = lengthGet(hypo, adj, opp, calc);
}

function lengthGet(hypo, adj, opp, calc, sin, cos, tan) {

    // if (calc == sin) {
    //     let n = (opp / hypo);
    // }

    // n = Math.asin(n) * 180 / Math.PI;

    console.log(calc);

    // return n;
}