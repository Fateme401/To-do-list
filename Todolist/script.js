const taskinput=document.getElementById("taskinput");
const listTask=document.getElementById("list-task");


function AddTask(){
    if(taskinput.value === ''){
        alert("You must write somethings!")
    }else{
        let li = document.createElement("li");
        li.innerHTML = taskinput.value;
        listTask.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    } 
    taskinput.value = " ";
    saveDate();
}


listTask.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked"); 
      saveDate();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }
}, false);


function saveDate(){
    localStorage.setItem("data", listTask.innerHTML );
}

function showTask(){
    listTask.innerHTML = localStorage.getItem("data");
}

showTask();