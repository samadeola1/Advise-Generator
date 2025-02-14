"use strict";

let adviceID = document.querySelector("p");
let adviceText = document.querySelector("h1");
let btn = document.querySelector("button");

async function getAdvice() {
  try {
    let req = await fetch("https://api.adviceslip.com/advice");
    let res = await req.json();
    console.log(res.slip.advice);
    console.log(res.slip.id);
    adviceID.innerText = `ADVICE #${res.slip.id}`;
    adviceText.innerText = `"${res.slip.advice}"`;
  } catch (error) {
    console.log(error);
  }
}

// getAdvice()
btn.addEventListener("click", getAdvice);