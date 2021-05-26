const rates = {
    fixed: 50,
    freeKm : 5,
    perKm : 10,
    freeMin : 15,
    permin : 2
}



function totalFare(km,min){
    let fare = rates.fixed
    fare +=  km > rates.freeKm ? (km - rates.freeKm)*rates.perKm : 0;
    fare += min > rates.freeMin ? (min -rates.freeMin)*rates.permin : 0;
    
    return fare
}

module.exports = {rates,totalFare}