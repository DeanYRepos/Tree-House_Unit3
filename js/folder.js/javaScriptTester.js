

const stringPrices = ['5.47', '3.12', '8.00', '5.63', '10.70'];
let priceTotal = 0;

// priceTotal should be: 32.92
// Write your code below

stringPrices.forEach(price => {
       const floatPrices =  price.parseFloat(price);

priceTotal += floatPrices;
})
console.log(priceTotal);