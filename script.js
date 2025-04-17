const searchBox = document.getElementById("to-do")
const listItems = document.getElementById("list-container")

function addTask() {
    if(searchBox.value === ""){
        alert("You must enter a task")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = searchBox.value
        listItems.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    searchBox.value = "";
    save();
}


listItems.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    }
}, false)

function save(){
    localStorage.setItem("data",listItems.innerHTML);
}

function show() {
    listItems.innerHTML = localStorage.getItem("data");
}
show();