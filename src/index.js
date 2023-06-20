document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form");
  form.addEventListener("submit", addToDo);

  function addToDo(e){
    e.preventDefault();
    let entry = document.getElementById("new-task-description").value;
    let li = document.createElement("li");
    let del = document.createElement("button");
    del.textContent = "x";
    del.addEventListener("click", () => del.parentNode.remove());
    let ul = document.getElementById("tasks");
    li.textContent = entry + "  ";
    ul.appendChild(li);
    li.appendChild(del);
    form.reset();
  }
});
