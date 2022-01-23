let container = document.querySelector(".inputContainer");
let input = document.querySelector("input");
let button = document.querySelector("button");

var stars = document.querySelectorAll(".starIcon");
let cross = document.querySelectorAll(".redIcon");

button.addEventListener("click", createToDo);

function createToDo() {
    if(input.value == "") {
        alert("You must write something!")
    } else {
        let todo = document.createElement("li");
        todo.classList.add("todo");
        container.appendChild(todo);
        
            let star = document.createElement("div");
            star.classList.add("star");
            todo.appendChild(star);
                let icon = document.createElement("i");
                icon.classList.add("starIcon", "icon", "grayIcon", "far", "fa-star");
                star.appendChild(icon);
    
            let info = document.createElement("div");
            info.classList.add("todoInfo");
            todo.appendChild(info);
                let h4 = document.createElement("h4");
                h4.innerHTML = input.value;
                info.appendChild(h4);
    
                let deleteTodo = document.createElement("i");
                deleteTodo.classList.add("icon", "redIcon", "fas", "fa-times");
                info.appendChild(deleteTodo);

        input.value = null;
    }
}

container.addEventListener("click", (e) => {
    if (e.target && e.target.matches("i.redIcon")) {
        console.log("Deleting element...");

        e.target.closest("li").classList.add("deletedTodo");
        setTimeout(() => {
            e.target.closest("li").classList.add("disappear")
        }, 500);
    }

    if (e.target && e.target.matches("i.starIcon")) {
        console.log("Favorite");
        
        e.target.classList.toggle("yellowIcon");
        e.target.classList.toggle("grayIcon");
        e.target.classList.toggle("fas");
        e.target.classList.toggle("far");
    }
});