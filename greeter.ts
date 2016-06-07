import Person from "./Person";
import Employee from "./Employee";

// /**
//  * Main function.
//  **/
// function greeter(person) {
//     return "Hello, " + person;
// }

// var user = "John User";

// let jane = new Person("Jane User");
// console.log( `Made new Person: ${jane.toString()}`);

// -----------------------------------------------------  hash()  ------------------------------------------------------

// Overload declarations.  This is only for type info, they do not carry through into generated javascript.
function hash( x: number): number; 
function hash( emp: Employee): number; 

function hash( x): number
{
   let retval;
   console.log( `typeof x: ${typeof x}`);
   if (x instanceof Employee)
   {
      // retval = (<Employee>x).name.length;
      console.log( "x is Employee");
      retval = 0;
      (<Employee>x).name.split("").forEach(c=>retval += c.charCodeAt(0));
      return retval;
   }
   else if (typeof x == "number")
      retval = x;
   else
   {
      console.log( `x is unexpected type: ${typeof x} (${x})`);
      retval = 0;
   }
   return retval;
}

// ----------------------------------------------------  main code  ----------------------------------------------------

console.log( `hash(7): ${hash(7)}`);

let boss = new Employee("Alice");
let sub1 = new Employee( "Bob");
let sub2 = new Employee( "Carol");

boss.addSubordinate( sub1);
boss.addSubordinate( sub2);

console.log( `Made new Employee: ${boss}`);

console.log( `hash(${boss.name}): ${hash(boss)}`);
console.log( `hash(${sub2.name}): ${hash(sub2)}`);

// let person = new Person("Jack");
// console.log( `hash(${person.name}): ${hash(person)}`); // overload fail ==> error

// document.body.innerHTML = greeter(user);
