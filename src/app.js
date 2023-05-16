/* eslint-disable */


window.onload = () => {
  let randomNumber = Math.random() * 10;
  document.querySelector =('#excuse').innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let who = ['The dog','My grandma','His turtle','My bird'];
  let action = ['ate','peed','crushed','broke'];
  let what = ['my homework', 'the keys', 'the car'];
  let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
  
  
  let exWho = Math.round(Math.random() * who.length);
  let exAction = Math.round(Math.random() * action.length);
  let exWhat = Math.round(Math.random() * what.length);
  let exWhen = Math.round(Math.random() * when.length);
  
  return who[exWho] + ' ' + action[exAction] + ' ' + what[exWhat] + ' ' + when[exWhen]
  };