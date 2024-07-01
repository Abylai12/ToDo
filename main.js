// theme solix checkbox
function myFunction() {
  let element = document.body;
  element.dataset.bsTheme =
    element.dataset.bsTheme == "light" ? "dark" : "light";
}
// dom medeelel avah
const btnSubmit = document.getElementById("btnSubmit");
let taskName = document.getElementById("floatingInput");
const outValue1 = document.getElementById("text-input1");
const outValue2 = document.getElementById("text-input2");
const outValue3 = document.getElementById("text-input3");
const outValue4 = document.getElementById("text-input4");
// tasks for value
const taskArray = [];

function myFunction() {
  // selected status
  let x = document.getElementById("floatingSelect").value;
  console.log(x);
  // selected status e.a TODO
  // task Name value bol ugugdsun name
  console.log(taskName.value);
  const newTask = {
    name: taskName.value,
    status: x,
  };
  taskArray.push(newTask);
  console.log(taskArray);
  draw();
}
btnSubmit.addEventListener("click", myFunction);

function draw() {
  outValue1.innerHTML = "";
  outValue2.innerHTML = "";
  outValue3.innerHTML = "";
  outValue4.innerHTML = "";

  for (let i = 0; i < taskArray.length; i++) {
    const newTaskCard = `
      <div
class="d-flex justify-content-between align-items-center p-2 m-2 rounded-4 bg-dark "
>
<div class="d-flex align-items-center">
<div class="toirog mx-2"></div>
<h5 class="fw-lighter fs-5 ms-3 mt-2" id="text-input4">
${taskArray[i].name}
</h5>
</div>
<div class="d-flex p-2">
<i type="button" class="fa-solid fa-pen"></i>
<i
  type="button"
  class="fa-solid fa-trash ms-2 text-danger"
></i>
</div>
</div>
 `;
    switch (taskArray[i].status) {
      case "TODO": {
        outValue1.innerHTML += newTaskCard;
        break;
      }
      case "INPROGRESS": {
        outValue2.innerHTML += newTaskCard;
        break;
      }
      case "DONE": {
        outValue3.innerHTML += newTaskCard;
        break;
      }
      case "BLOCKED": {
        outValue4.innerHTML += newTaskCard;
        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }
  }
}

let [ { sodfjdshf}]
function remove() {
  for (let i = 0; i < taskArray.length; i++){
    switch (taskArray[i].name) {
      case "TODO": {
        outValue1.innerHTML += newTaskCard;
        break;
      }
      case "INPROGRESS": {
        outValue2.innerHTML += newTaskCard;
        break;
      }
      case "DONE": {
        outValue3.innerHTML += newTaskCard;
        break;
      }
      case "BLOCKED": {
        outValue4.innerHTML += newTaskCard;
        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }
  }
  }
}
