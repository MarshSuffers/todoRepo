// --- 1. DOM Elements & State ---
// The IDs from your HTML are already captured here for you:
const text = document.getElementById("text");
const addTaskButton = document.getElementById("add-task-btn");
const saveTaskButton = document.getElementById("save-todo-btn");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex"); // Hidden input for editing

let todoArray = [];

// --- 2. Initial Load ---
// TASK: Call your displayTodo function here so the list appears when the page loads.

// --- 3. Adding a Task ---
addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();

  // STEP 1: Get the current "todo" string from localStorage.
  // STEP 2: If it exists, use JSON.parse() to turn it into an array. If not, set todoArray to [].
  // STEP 3: If text.value is empty, alert the user and return early.
  // STEP 4: Push text.value into your todoArray.
  // STEP 5: Save the array back to localStorage using setItem and JSON.stringify().
  // STEP 6: Clear the text.value and call your display function.
});

// CHALLENGE: Add a "keydown" listener to 'text'. If e.key === "Enter", trigger addTaskButton.click().

// --- 4. Displaying the List ---
function displayTodo() {
  // STEP 1: Get and parse the "todo" array from localStorage.
  // STEP 2: Create a variable 'htmlCode' to build your string.
  // STEP 3: Use .forEach() to loop through the array.
  //         For each item, add a <div> to 'htmlCode' that includes:
  //         - The task text
  //         - An Edit button that calls edit(index)
  //         - A Delete button that calls deleteTodo(index)
  // STEP 4: Set listBox.innerHTML equal to your htmlCode.
}

// --- 5. Deleting a Task ---
function deleteTodo(ind) {
  // STEP 1: Get and parse your "todo" array from localStorage.
  // STEP 2: Use .splice(ind, 1) to remove the item at that index.
  // STEP 3: Stringify and save the updated array back to localStorage.
  // STEP 4: Call displayTodo() to refresh the list.
}

// --- 6. Editing a Task ---
function edit(ind) {
  // STEP 1: Set saveInd.value equal to the index (ind) so we remember which one we are editing.
  // STEP 2: Get and parse your array.
  // STEP 3: Set text.value to the content of the array at that specific index.
  // STEP 4: UI SWAP: Set addTaskButton.style.display to "none".
  // STEP 5: UI SWAP: Set saveTaskButton.style.display to "block".
}

// --- 7. Saving the Edited Task ---
saveTaskButton.addEventListener("click", () => {
  // STEP 1: Get and parse your array from localStorage.
  // STEP 2: Let 'id' equal the value currently stored in saveInd.value.
  // STEP 3: Update your array: todoArray[id] = text.value.
  // STEP 4: Stringify and save the updated array to localStorage.
  // STEP 5: UI RESET: Clear text.value.
  // STEP 6: UI RESET: Set addTaskButton display to "block" and saveTaskButton to "none".
  // STEP 7: Call displayTodo().
});
