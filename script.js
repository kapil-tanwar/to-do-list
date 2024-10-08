document.querySelector("#push").onclick = () => {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Enter the new task");
  } else {
    document.querySelector("#tasks").innerHTML += `
    <div class="task">
        <div class="left">
            <input type="checkbox" class="check"/>
            <span class="taskname">
                ${document.querySelector("#newtask input").value}
            </span>
        </div>
        <button class="delete">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>`;
    var total_delete = document.querySelectorAll(".delete");
    for (var i = 0; i < total_delete.length; i++) {
      total_delete[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    var checkbox = document.querySelectorAll(".check");
    for (var i = 0; i < checkbox.length; i++) {
      checkbox[i].onclick = function () {
        this.parentNode.classList.toggle("completed");
        this.style.display = "none";
      };
    }
    document.querySelector("#newtask input").value = "";
  }
};
