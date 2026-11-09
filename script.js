
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Load saved tasks
let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

// Save tasks
function saveTasks() {
  localStorage.setItem("myTasks", JSON.stringify(tasks));
  }

  // Display tasks
  function displayTasks() {
    taskList.innerHTML = "";

      tasks.forEach(function(task) {
          const li = document.createElement("li");

              const span = document.createElement("span");
                  span.textContent = task.name;

                      if (task.completed) {
                            span.style.textDecoration = "line-through";
                                }

                                    const doneButton = document.createElement("button");
                                        doneButton.textContent = task.completed ? "Undo" : "Done";

                                            doneButton.addEventListener("click", function() {
                                                  task.completed = !task.completed;
                                                        saveTasks();
                                                              displayTasks();
                                                                  });

                                                                      const deleteButton = document.createElement("button");
                                                                          deleteButton.textContent = "Delete";

                                                                              deleteButton.addEventListener("click", function() {
                                                                                    tasks = tasks.filter(function(item) {
                                                                                            return item.id !== task.id;
                                                                                                  });

                                                                                                        saveTasks();
                                                                                                              displayTasks();
                                                                                                                  });

                                                                                                                      li.append(span, doneButton, deleteButton);
                                                                                                                          taskList.appendChild(li);
                                                                                                                            });
                                                                                                                            }

                                                                                                                            // Add tasks
                                                                                                                            function addTask() {
                                                                                                                              const name = taskInput.value.trim();

                                                                                                                                if (name === "") {
                                                                                                                                    alert("Please enter a task!");
                                                                                                                                        return;
                                                                                                                                          }

                                                                                                                                            tasks.push({
                                                                                                                                                id: Date.now(),
                                                                                                                                                    name: name,
                                                                                                                                                        completed: false
                                                                                                                                                          });

                                                                                                                                                            saveTasks();
                                                                                                                                                              displayTasks();

                                                                                                                                                                taskInput.value = "";
                                                                                                                                                                }

                                                                                                                                                                // Button click
                                                                                                                                                                addButton.addEventListener("click", addTask);

                                                                                                                                                                // Allow Enter key
                                                                                                                                                                taskInput.addEventListener("keydown", function(event) {
                                                                                                                                                                  if (event.key === "Enter") {
                                                                                                                                                                      addTask();
                                                                                                                                                                        }
                                                                                                                                                                        });

                                                                                                                                                                        // Show saved tasks when app opens
                                                                                                                                                                        displayTasks();
                                                                                                                                                                        
