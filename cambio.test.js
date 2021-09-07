test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./cambio.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be ???? yens", function(){
    // importo la funcion desde cambio.js
    const { fromDollarToYen } = require('./cambio.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(100)).toBe(10658.333333333336); //
})

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./cambio.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(10000)).toBe(62.54886630179828); //
})