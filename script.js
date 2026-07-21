//Declare Variables
const taskList = ["test"];
const addTaskBtn = document.getElementById("addTaskBtn");
let task = document.getElementById("inputText");

console.log(taskList);

//Add Task
addTaskBtn.addEventListener("click", addTask);

function addTask() {
  console.log("test");
  taskList.push(task.value);
  console.log(taskList);
}

console.log(taskList);

//Display Tasks
