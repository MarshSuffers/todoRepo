//Declare Variables
let taskArray = [];

const addTaskBtn = document.getElementById("addTaskBtn");
const deleteBtn = document.getElementById("deleteBtn");
const editBtn = document.getElementById("editBtn");
const saveBtn = document.getElementById("saveEditBtn");
const resetBtn = document.getElementById("resetBtn");

let saveInd = document.getElementById("saveIndex");
let taskList = document.getElementById("taskList");
let task = document.getElementById("inputText");

//Initial Load
displayTasks();
checkStorage();

//Add Task
addTaskBtn.addEventListener("click", addTask);

function addTask() {
  if (task.value == "") {
    alert("Enter Text");
  } else {
    taskArray.push(task.value);
    console.log(taskArray);
    updateArray();
    task.value = "";
    displayTasks();
  }
}

//Display Tasks
function displayTasks() {
  if (taskArray.length == 0) {
    taskList.innerHTML = "<p>No Tasks</p>";
  } else {
    console.log(taskArray);
    taskList.innerHTML = "";
    for (let i = 0; i < taskArray.length; i++) {
      taskList.innerHTML += `<div "class=item"><li>${taskArray[i]}</li><button onclick="deleteTask(${i})">Delete</button>
      <button onclick="editTask(${i})">Edit</button></div>`;
      updateArray();
    }
  }
  updateArray();
}

//Delete Tasks
function deleteTask(ind) {
  console.log(ind);
  taskArray.splice(indexedDB, 1);
  displayTasks();
  console.log(taskArray);
  updateArray();
}

//Edit Tasks
function editTask(ind) {
  console.log(ind);
  saveInd.value = ind;
  task.value = taskArray[saveInd.value];
  saveBtn.style.display = "block";
  addTaskBtn.style.display = "none";
}

//Save Edit
saveBtn.addEventListener("click", saveTask);

function saveTask() {
  taskArray[saveInd.value] = task.value;
  displayTasks();
  updateArray();
  saveBtn.style.display = "none";
  addTaskBtn.style.display = "block";
}

//Check local storage
function checkStorage() {
  let storage = JSON.parse(localStorage.getItem("taskArray"));
  if (storage != null) {
    let taskArray = storage;
  }
}

//Update Array
function updateArray() {
  localStorage.setItem("taskArray", JSON.stringify(taskArray));
}

//Reset Array
resetBtn.addEventListener("click", reset);

function reset() {
  localStorage.clear;
  taskList.innerHTML = "<p>No Tasks</p>";
  updateArray();
  taskArray.length = 0;
}
