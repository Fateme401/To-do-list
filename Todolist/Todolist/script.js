const taskinput = document.getElementById("taskinput");
const listTask = document.getElementById("list-task");


function AddTask() {
    if (taskinput.value.trim() === '') {
        alert("تسکت کو؟!")
    } else {
        let li = document.createElement("li");
        li.textContent = taskinput.value;

        let editSpan = document.createElement("span");
        editSpan.className = "edit-icon";
        editSpan.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
        li.appendChild(editSpan);

        listTask.insertBefore(li, listTask.firstChild);

        let span = document.createElement("span");
        span.className = "delete-icon";
        span.textContent = "\u00d7"
        li.appendChild(span);
    }
    taskinput.value = '';
    saveData();
}



listTask.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.closest(".delete-icon")) {
        e.target.closest("li").remove();
        saveData();
    }


    // Edit task
    if (e.target.closest(".edit-icon")) {
        editingLi = e.target.closest("li");

        let oldText = editingLi.firstChild.textContent.trim();

        document.getElementById("editInput").value = oldText;

        document.getElementById("editPopup").style.display = "block";

        document.getElementById("editInput").addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                document.getElementById("saveEdit").click();
            }
        });
        saveData();
    }



}, false);


// Edit task
document.getElementById("saveEdit").onclick = function () {
    let newText = document.getElementById("editInput").value.trim();

    if (newText !== "") {
        editingLi.firstChild.textContent = newText;
        saveData();
    }

    document.getElementById("editPopup").style.display = "none";
};


document.getElementById("cancelEdit").onclick = function () {
    document.getElementById("editPopup").style.display = "none";
};



// save Task with Enter key
taskinput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        AddTask();
    }
});

function saveData() {
    localStorage.setItem("data", listTask.innerHTML);
}

function showTask() {
    listTask.innerHTML = localStorage.getItem("data");
}

showTask();


