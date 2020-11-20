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