/* Custom Dragula JS */
dragula([
document.getElementById("to-do"),
document.getElementById("doing"),
document.getElementById("done"),
document.getElementById("trash")]);

removeOnSpill: false.
//removeOnSpill : true 설정시 drop영역 외에 다른 곳에 drop하면 객체가 사라지도록 변경된다.
on("drag", function (el) { // drag할 때
  el.className.replace("ex-moved", ""); // replace
}).
on("drop", function (el) { // drop할 때
  el.className += "ex-moved"; // 이동시킨 영역에 추가
}).
on("over", function (el, container) { // drop영역으로 올라왔을 때
  container.className += "ex-over";
}).
on("out", function (el, container) { // 
  container.className.replace("ex-over", "");
});

/* Vanilla JS to add a new task */
function addTask() { // 할일 추가하기
  /* Get task text from input */
  var inputTask = document.getElementById("taskText").value; // 사용자가 입력한 텍스트
  /* Add task to the 'To Do' column */
  document.getElementById("to-do").innerHTML +=
  "<li class='task'><p>" + inputTask + "</p></li>"; // to-do 영역에, 사용자가 입력한 텍스트를 넣은 할일 li 추가
  /* Clear task text from input after adding task */
  document.getElementById("taskText").value = ""; //사용자가 텍스트 입력하는 영역 다시 비워주기
}

/* Vanilla JS to delete tasks in 'Trash' column */
function emptyTrash() { // 할일 비우기
  /* Clear tasks from 'Trash' column */
  document.getElementById("trash").innerHTML = ""; //trash 영역에 있는 요소들 삭제
}
//# sourceURL=pen.js