



let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica'];

let index = parseInt(prompt("Enter an index: "));

if (index >= 0 && index < arr.length) {
  arr.splice(index, 1);
  console.log(`Element at index ${index} removed. New array: ${arr}`);
} else {
  console.log(`Element at index ${index} does not exist.`);
}