document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("taskForm");
  const taskList = document.getElementById("taskList");
  const clearAllBtn = document.getElementById("clearAllBtn");

  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();

    if (title && description) {
      addTask(title, description);
      titleInput.value = "";
      descriptionInput.value = "";
    }
  }); 

  function addTask(title, description) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
            <span>${title}</span>
            <span>${description}</span>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
            <button class="completeBtn">Complete</button>
        `;

    taskItem.querySelector(".editBtn").addEventListener("click", function () {
      const newTitle = prompt("Enter new title:", title);
      const newDescription = prompt("Enter new description:", description);
      if (newTitle !== null && newDescription !== null) {
        taskItem.querySelector("span:first-child").textContent = newTitle;
        taskItem.querySelector("span:nth-child(2)").textContent =
          newDescription;
      }
    });

    taskItem.querySelector(".deleteBtn").addEventListener("click", function () {
      taskList.removeChild(taskItem);
    });

    taskItem
      .querySelector(".completeBtn")
      .addEventListener("click", function () {
        taskItem.classList.toggle("completed");
      });

    taskList.appendChild(taskItem);
  }

  clearAllBtn.addEventListener("click", function () {
    taskList.innerHTML = "";
  });
});
