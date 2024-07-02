// theme solix checkbox
function myFunction() {
  let element = document.body;
  element.dataset.bsTheme =
    element.dataset.bsTheme == "light" ? "dark" : "light";
}
// dom medeelel avah
const btnSubmit = document.getElementById("btnSubmit");
const btnMode = document.getElementById("btnMode");
let taskName = document.getElementById("floatingInput");
let taskStatus = document.getElementById("floatingSelect");
const outValue1 = document.getElementById("text-input1");
const outValue2 = document.getElementById("text-input2");
const outValue3 = document.getElementById("text-input3");
const outValue4 = document.getElementById("text-input4");
let taskChangeIndex = -1;

// tasks for value
const taskArray = [];

function myFunction() {
  const newTask = {
    name: taskName.value,
    status: taskStatus.value,
  };
  taskArray.push(newTask);
  taskName.value = "";
  taskStatus.value = "TODO";
  draw();
}
btnSubmit.addEventListener("click", myFunction);

function modeChange(changeIndex) {
  taskName.value = taskArray[changeIndex].name;
  taskStatus.value = taskArray[changeIndex].status;
  taskChangeIndex = changeIndex;
}

btnMode.addEventListener("click", () => {
  taskArray[taskChangeIndex].name = taskName.value;
  taskArray[taskChangeIndex].status = taskStatus.value;
  console.log(taskChangeIndex);
  console.log(taskName.value);
  console.log(taskStatus.value);
  taskName.value = "";
  taskStatus.value = "TODO";
  draw();
});

function draw() {
  outValue1.innerHTML = "";
  outValue2.innerHTML = "";
  outValue3.innerHTML = "";
  outValue4.innerHTML = "";

  for (let i = 0; i < taskArray.length; i++) {
    const newTaskCard = `
      <div class="d-flex justify-content-between align-items-center border p-2 m-2 ${changecolor()} rounded-4  bg-dark">
        <div class="d-flex align-items-center">
        <div class="toirog mx-2"></div>
        <h5 class="fw-lighter fs-5 ms-3 mt-2">
        ${taskArray[i].name}
        </h5>
        </div>
        <div class="d-flex p-2">
        <button class = "btn" onclick="modeChange(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i type="button" class="fa-solid fa-pen"></i>
        </button>
        <button class = "btn" onclick="deleteTask(${i})">
          <i type="button"class="fa-solid fa-trash ms-2 text-danger"></i>
        </button>
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
function changecolor() {
  switch (taskStatus.value) {
    case "TODO": {
      return "border-danger";
    }
    case "INPROGRESS": {
      return "border-success";
    }
    case "DONE": {
      return "border-primary";
    }
    case "BLOCKED": {
      return "border-warning";
    }
  }
}
const deleteTask = (taskIndex) => {
  console.log("Task deleted", taskIndex);
  taskArray.splice(taskIndex);
  draw();
};
