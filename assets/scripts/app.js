import { frases, len } from './frases.js';

const text = document.querySelector("#text");
const refresh = document.querySelector(".refresh");

const randFrase = () => {
  const rand = Math.floor(Math.random() * len);
  text.textContent = `“${frases[rand]}”`;
  refresh.classList.add("ative");
  setTimeout(() => refresh.classList.remove("ative"), 1000);
};

window.onload = () => randFrase();
refresh.onclick = () => randFrase();
