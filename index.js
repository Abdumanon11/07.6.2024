/* alert('hi') */
/* variables */

/* var, let , const */

/* var a = 16 */
/* 
let a = '16'
const a ='10' */

/* 
let name  = ' Abdumanon'

console.log(name)

name = "malik"

console.log(name ); */


/* let fisrtName =' Абдуманон';
let age = 14;
let lestName = ' Илхохомов'
let monthofbirth = ' марта'

console.log('привет меня зовут ' + fisrtName + ' мой фамилия '+ lestName +' мене '+  age + ' лет  я родился 26  ' + monthofbirth  );

console.log();
 */

/* 
let admin;
let name;

name = "Джон";
admin = name;

console.log(admin);


let balance = 25000;
let car = 4480;
let food = 890;
let invoice = 5500;
let stock = 4200;
let totalBalance = balance - car - food + invoice + stock;

console.log(totalBalance);
 */





/* let str = 'hello World'

console.log(str[1])

console.log(str.at(-11)); */

/* let lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ipsum vero soluta aliquid, labore fugit vel quisodio.Exercitationem neque numquam esse eaque, at sapiente provident ut harum veniam magnam."

console.log(str.indeOf(a));
 */

/* 
 let a = "aaa@bbb@ccc"

 

console.log(
   a.replaceAll(/@/g,`!`)
);



let arr = "HELLOWORLD"
console.log(
   arr.slice(0,1) + arr.slice(1,5).toLowerCase() + " " + arr.slice(5).toLowerCase()
)


let tem = "Hello, it is HTML not JS"
console.log(
   tem.slice( tem.search("Hello"),tem.search("Hello") +  5),
   tem.slice( tem.search("it is"),tem.search("it is") +  5),
   tem.slice( tem.search("not"),tem.search("not") +  + 3),
   tem.slice( tem.search("JS"),tem.search("JS") +  2)
)





let tico = "alex"
console.log (
   tico.slice(0,1).toLocaleUpperCase() +
   tico.slice(1,2) +
   tico.slice(2,3) +
   tico.slice(3,4) 
)

let title = Math.random().toFixed()
console.log(title)








let b = prompt('Hello, what is your name?');
console.log(b);
let capitalized = b.charAt(0).toUpperCase() + b.slice(1);
alert("Welcome " + capitalized );





 */




let name = prompt("What's your name?");

if (name === "Alex") {
  let password = prompt("Enter your password:");
  if (password === "7777") {
    
    let amount = parseFloat(prompt("How much money do you want to withdraw?"));
    if (amount >= 1000 && amount <= 10000) {
      alert(`You withdrew ${amount} from your account.`);
    } else {
      alert("Invalid withdrawal amount. Please try again.");
    }
  } else {
    alert("Incorrect password. Please try again.");
  }
} else {
  alert("Access denied. Please try again.");
}let a = "s"
    







































