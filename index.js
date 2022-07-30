document.querySelector("form").addEventListener("submit", todoApp);
let taskArr = [];
function todoApp() {
  event.preventDefault();
  let taskName = document.querySelector("#task").value;
  let priority = document.querySelector("#priority").value;
  //   console.log(taskName, priority);
  let taskObj = {
    task: taskName,
    prior: priority,
  };
  taskArr.push(taskObj);
  displayTable(taskArr);
  //   console.log(taskArr);
}
function displayTable(taskArr) {
  document.querySelector("tbody").innerHTML = "";
  //   for (let i = 0; i < taskArr.length; i++)
  taskArr.map((ele) => {
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = ele.task;
    let col2 = document.createElement("td");
    col2.innerText = ele.prior;
    if (ele.prior == "High") {
      col2.style.backgroundColor = "red";
    } else {
      col2.style.backgroundColor = "green";
    }
    let col3 = document.createElement("td");
    col3.innerText = "Delete";
    col3.style.color = "red";
    col3.addEventListener("click", function (event) {
      console.log(event.target);
      //   row.remove();
    });
    row.append(col1, col2, col3);
    document.querySelector("tbody").append(row);
  });
}
