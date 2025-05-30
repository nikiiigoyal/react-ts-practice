let awesomeName: string = 'shakeAndBake';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();

console.log(awesomeName)

let amount: number = 12;
amount = 12 - 1;

let isAwesome: boolean = true;
isAwesome = false;


let greeting: string = 'Hello Typescript';
greeting = greeting.toUpperCase();

let age: number = 25;
age = age + 5;

let isAdult: boolean = age >= 18;
isAdult = !isAdult;

// union type
let tax: number | string = 10;
tax = 100;
tax = '$10'
console.log(tax)

let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';
console.log(requestStatus)

// any
let notSure: any = 4;
notSure = 'maybe a string';
notSure = false;

const books = ['1987','Bravee New World', 'Farenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
    if (book === '1987') {
        foundBook = book;
        foundBook = foundBook.toUpperCase();
        break;
    }
}
console.log(foundBook?.length)

// Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
orderStatus = "delivered";
console.log(orderStatus)
// Create a variable discount of type number | string and assign it the value 20. Then, 
let discount: number | string = 20;
discount = '20%'
console.log(discount)

// Arrays 
let temperatures: number[] = [20,42,42];
temperatures.push('hot');
console.log(temperatures)

let colors: string[] = ['red','blue','greeen']
colors.push(true);
console.log(colors)

let mixedArray: (number | string)[] = [1 ,"two", 2]
mixedArray.push(true);
console.log(mixedArray)

// objects
let bike: {brand: string, year: number} = {brand: 'ford', year: 2025};
bike.year = 'old';
console.log(bike);

let laptop: {brand: String; year: number} = {brand: 'Dell', year: 2015}

let product1 = {title: 'shirt', price: 20 };
let product2 = { title: 'pants'}
let products : {title: string, p1rice?: number}[]= [product1, product2]
products.push({title: 'shoes', price: 'expensive' });
