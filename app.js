const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum };

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
let fromEuroToDollar =(euros) => {
    return euros *oneEuroIs.USD;
};
const fromDollarToYen=(dollars)=>{
    let euros= dolars/oneEuroIs.USD;
    return euros*oneEuroIs.JPY
};
const fromYenToPound = (yens)=> {
    let euros= yens/oneEuroIs.JPY;
    return euros*oneEuroIs.GBP;
};
module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
}
