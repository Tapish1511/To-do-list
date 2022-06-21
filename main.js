const addTaskBtn = document.getElementById("add-task-button");
const myList = document.getElementById("task-list");
const inputEl = document.getElementById("input-task");
let myTasks = [];

addTaskBtn.addEventListener("click", ()=>{
    if(inputEl.value){
        myTasks.push(inputEl.value)
        inputEl.value = "";
        localStorage.setItem("myTask", JSON.stringify(myTasks))
        render(myTasks);
    }
})
const previousTask = JSON.parse(localStorage.getItem("myTask"));
if(previousTask){
    myTasks = previousTask;
}

function render(tasks){
    let myHtml = "";
    for(let i=0; i<tasks.length; i++){
        myHtml+= `
        <li class="list-items">
               
               <input type="checkbox" name="nameOfTask">
                <span class="task">${tasks[i]}</span>
                <div class="del-el">
                    <button class="delete-btn" onclick="removeItem(${i})">X</button>
                </div>
           </li>
        `
    }
    myList.innerHTML = myHtml;

}
function removeItem(index){
    myTasks.splice(index, 1);
    localStorage.setItem("myTask", JSON.stringify(myTasks));
    render(myTasks);
}
render(myTasks);
