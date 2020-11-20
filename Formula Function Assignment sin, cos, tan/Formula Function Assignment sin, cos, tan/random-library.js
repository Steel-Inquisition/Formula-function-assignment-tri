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