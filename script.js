const inputBox = document.getElementById('input-box');
const listCointainer = document.getElementById('list-container');
function addTask(){
    if(inputBox.value === ''){
        alert("Please enter a task!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = inputBox.value;
        listCointainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()

}
inputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
listCointainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);
function saveData(){
    localStorage.setItem("data", listCointainer.innerHTML);
}
function showTask(){
    listCointainer.innerHTML = localStorage.getItem("data");
}
showTask();