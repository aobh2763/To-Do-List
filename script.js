const nameLine = document.getElementById("name");
const contLine = document.getElementById("content");
const button = document.getElementById("add");
const todoList = document.getElementById("list");

var todoCount = 0;

function makeButtonPressable() {
    if (nameLine.value != "" && contLine.value != "") {
        button.style.backgroundColor = "blue";
    } else {
        button.style.backgroundColor = "cornflowerblue";
    }
}

function createToDo(id, name, cont) {
    let todo = `<div class="option" id="opt` + id + `">
                    <p>` + name + ` : ` + cont + `<img src="assets/trash.png" class="del" id="img` + id + `"></p>
                </div>`;

    return todo;
}

function addToDo() {
    if (nameLine.value == "" || contLine.value == "") {
        return;
    }
    let todo = createToDo(todoCount, nameLine.value, contLine.value);

    todoList.innerHTML += todo;

    var imgs = document.getElementsByClassName("del");
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("click", (e) => {
            document.getElementById(e.target.id).parentNode.parentNode.remove();
        });
    }

    todoCount++;

    nameLine.value = "";
    contLine.value = "";
}

nameLine.addEventListener("input", makeButtonPressable);
contLine.addEventListener("input", makeButtonPressable);

button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "cornflowerblue";
})
button.addEventListener("mouseleave", makeButtonPressable);

button.addEventListener("click", addToDo);