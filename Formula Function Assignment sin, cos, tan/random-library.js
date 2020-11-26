// Do the calculations
function populationGrowth(birth, moveIn, death, moveOut, population) {
    let growth = (((birth + moveIn) - (death + moveOut)) / population);

    if (population <= 0) {
        growth = 0;
    }

    return growth;
}