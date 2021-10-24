// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
//for of
let K:Array<string|number> = ["kathiravan","kumaran",282, 108]
for(let f of K) {
   console.log(K)
  if(f ==282) {
    break;
  }

let k1 = ["kathir","dena",85, true]
for(let f1 of k1) {
   console.log(k1)
  if(f1 == "kumaran") {
   continue;
  }
}
let fullname = "kathiravan"
for(let fn of fullname) {
   console.log(fn)
  if(fn == 'v') {
    break;
  }
}
//while lopps
let i = 0;
while (i <=100) {
console.log(i)
  i++;
}