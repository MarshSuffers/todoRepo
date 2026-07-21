//Declare Variables
const taskList = [];
const addTaskBtn = document.getElementById("addTaskBtn");
let task = document.getElementById("inputText");

//Add Task
addTaskBtn.addEventListener("click", addTask);

function addTask() {
  console.log("test");
  taskList.push(task);
  console.log(taskList);
}

console.log(taskList);

//Display Tasks
