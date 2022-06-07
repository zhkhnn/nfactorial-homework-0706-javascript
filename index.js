import { info, services as s } from "./main.js"
import { default as add } from "./main.js"



info('Aidana', 'Dalida', 'manicure', 'pedicure', 'hairstylist') //export import 
add(); //deafult export import


const SALON_NAME = "Dalida beauty room"
const OWNER = 'Dalida'
const ADMIN = 'Aidana'


let too_expensive = true
let customer = "Aruzhan"
let employees = 18

//ternary expressions
function coming_to_beauty_room(too_expensive) {
    console.log(too_expensive ? 'no' : 'yeap');
}
console.log(coming_to_beauty_room());
let manicure = {
    name: 'manicure',
    price: 7000,
    master: 'Aruzhan',
    instrumenty: 'pilka',
}
let pedicure = {
    name: 'pedicure',
    price: 12000,
    master: 'Assem',
    instrumenty: 'tazik',
}
console.log(manicure.name);
console.log(pedicure.price);

//arrow functions
let total_price = (a, b) => console.log(a + b);
total_price(manicure.price, pedicure.price);


//creating deleting new value
manicure.products = 'lak';
delete manicure.products;


//function expression
let countServices = function() {
    return s.length;
};


//methods
manicure.print = function() {
    console.log(this.name + this.price + this.master)
};
manicure.print();



//as export import 
console.log(s.length);
s.push('laminirovanie');
s.pop();



// spread
let admins = ['Aidar', 'Dalida', 'Aidana']
let masters = ['Aruzhan', 'Yernur', 'Daulet', ...admins, 'Alibek', 'Assem']


//dictionary and loop
let prices = {
    manicure: 7000,
    pedicure: 12000,
    makeup: 10000,
    brovi: 15000,
}
var total = 0;
for (var el in prices) {
    if (prices.hasOwnProperty(el)) {
        total += parseFloat(prices[el]);
    }
}
console.log(total);