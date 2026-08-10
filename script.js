let tasks = [];

function addTask() {
    let task = document.getElementById("task").value;
    let subject = document.getElementById("subject").value;
    let date = document.getElementById("date").value;
    let priority = document.getElementById("priority").value;

    if (!task) return;

    tasks.push({
        task,
        subject,
        date,
        priority,
        done: false
    });

    document.getElementById("task").value = "";
    displayTasks();
}

function displayTasks() {
    let container = document.getElementById("tasks");
    container.innerHTML = "";

    tasks.forEach((t, i) => {
        container.innerHTML += `
            <div class="task ${t.priority.toLowerCase()}">
                <div class="${t.done ? "done" : ""}">
                    <h3>${t.task}</h3>
                    <p>${t.subject} | Due: ${t.date} | ${t.priority}</p>
                </div>

                <div>
                    <button onclick="completeTask(${i})">✓</button>
                    <button class="delete" onclick="deleteTask(${i})">Delete</button>
                </div>
            </div>
        `;
    });

    updateStats();
}

function completeTask(i) {
    tasks[i].done = !tasks[i].done;
    displayTasks();
}

function deleteTask(i) {
    tasks.splice(i, 1);
    displayTasks();
}

function updateStats() {
    document.getElementById("total").innerText = tasks.length;

    document.getElementById("completed").innerText =
        tasks.filter(t => t.done).length;

    document.getElementById("pending").innerText =
        tasks.filter(t => !t.done).length;
}