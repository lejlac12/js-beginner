let article = false;
let price = false;
let results = article || price;


console.log('Eligible', results);

// NOT (!)
let example = !results;

console.log('example', example);