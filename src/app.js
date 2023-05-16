/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(
    "#excuse"
  ).innerHTML = `<strong>${generateExcuse()}</strong>`;
};

const generateExcuse = () => {
  const who = ["The dog", "My grandma", "His turtle", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const exWho = Math.floor(Math.random() * who.length);
  const exAction = Math.floor(Math.random() * action.length);
  const exWhat = Math.floor(Math.random() * what.length);
  const exWhen = Math.floor(Math.random() * when.length);

  return `${who[exWho]} ${action[exAction]} ${what[exWhat]} ${when[exWhen]}`;
};
