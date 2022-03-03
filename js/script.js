const idEl = document.getElementById("adviceId");
const textEl = document.getElementById("adviceText");
const changebtnEl = document.getElementById("change");
let advice = { id: "", advice: "" };
async function getAdvice() {
  const url = "https://api.adviceslip.com/advice";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  advice = data.slip;
  console.log(advice);
  // rendering advice
  textEl.textContent = "";
  idEl.textContent = "";
  textEl.textContent = `"${advice.advice}"`;
  idEl.textContent = advice.id;
}
// function that run when change btn is clicked
function changeAdvice() {
  getAdvice();
}
// Initaial function
function init() {
  getAdvice();
  changebtnEl.addEventListener("click", changeAdvice);
}
init();
