let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP":0.8 // british pound
}

function fromDollarToYen(valor){
    let resul = valor *(1/oneEuroIs.USD)*oneEuroIs.JPY;
    return resul;
}

function fromEuroToDollar(valor){
    let resul = valor * oneEuroIs.USD;
    return resul;
}

function fromYenToPound(valor){
    let resul = valor*(1/oneEuroIs.JPY)*oneEuroIs.GBP;
    return resul;
}
console.log(fromDollarToYen(100));
console.log(fromEuroToDollar(3.5));
console.log(fromYenToPound(10000));

module.exports = { fromDollarToYen,fromEuroToDollar,fromYenToPound };