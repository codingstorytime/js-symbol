// Import stylesheets
import './style.css';

//Creating a Symbol with an optional description
const moya = Symbol("twin");

const amoya = Symbol("twin");

//Explicity converting a Symbol to String 
console.log(moya.toString()); // expected output "Symbol(twin)"
console.log(String(amoya));   // expected output "Symbol(twin)"

//The description of a Symbol does not have to be unique
console.log(moya.toString() === amoya.toString()); 

//Coersion to either string or a number results in a type error for Symbols since Symbol.toString() throws a TypeError when coersion is being  performed


//Cannot use addition operator or coersion methods should as Number.parseInt()

 
