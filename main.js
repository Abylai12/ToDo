// theme solix checkbox
function myFunction() {
  let element = document.body;
  element.dataset.bsTheme =
    element.dataset.bsTheme == "light" ? "dark" : "light";
}
// dom medeelel avah
const btnSubmit = document.getElementById("btnSubmit");
let taskName = document.getElementById("floatingInput");
const taskValue = document.getElementById("floatingSelect");
const out1 = document.getElementById("output-text");
const outValue1 = document.getElementById("text-input1");
const outValue2 = document.getElementById("text-input2");
const outValue3 = document.getElementById("text-input3");
const outValue4 = document.getElementById("text-input4");
const bodyDiv = document.getElementsByClassName("davtagdashgui")[0];
console.log(bodyDiv);

function getValue() {
  let orgNumber = Number(taskValue.value);
  console.log(taskName.value);
  console.log(typeof orgNumber);
  if (orgNumber === 1) {
    const parent = document.getElementsByClassName("card-body")[0];
    outValue1.innerHTML = taskName.value;
    parent.appendChild(bodyDiv);
  } else if (orgNumber === 2) {
    outValue2.innerHTML = taskName.value;
  } else if (orgNumber === 3) {
    outValue3.innerHTML = taskName.value;
  } else if (orgNumber === 4) {
    outValue4.innerHTML = taskName.value;
  }
}
btnSubmit.addEventListener("click", getValue);
