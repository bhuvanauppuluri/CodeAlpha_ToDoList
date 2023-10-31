document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const favoriteList = document.getElementById("favoriteList");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="complete-button">Complete</button>
                <button class="delete-button">Delete</button>
                <button class="favorite-button">Favorite</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";

            // Add event listener to complete button
            const completeButton = li.querySelector(".complete-button");
            completeButton.addEventListener("click", function () {
                li.classList.toggle("completed");
            });

            // Add event listener to delete button
            const deleteButton = li.querySelector(".delete-button");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(li);
            });

            // Add event listener to favorite button
            const favoriteButton = li.querySelector(".favorite-button");
            favoriteButton.addEventListener("click", function () {
                const favoriteLi = document.createElement("li");
                favoriteLi.textContent = taskText;
                favoriteList.appendChild(favoriteLi);
            });
        }
    }

    // Event listener for adding a new task
    addTaskButton.addEventListener("click", addTask);

    // Event listener for adding a new task when pressing Enter key
    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
