function start(){
swal({
  title: "그림맞추기 게임",
  text: "단어에 맞는 그림을 끌어와주세요!\n"+"저번에는 "+localStorage.dragCounter+"번만에 맞췄어요!",
  icon: "info",
  button: "시작"
});
}
function noStart(){
swal({
  title: "그림맞추기 게임",
  text: "단어에 맞는 그림을 끌어와주세요!\n첫 도전에 성공해보세요!!!",
  icon: "info",
  button: "시작"
});
}
if(localStorage.dragCounter>0){
	start();
} else{
	noStart();
}
const draggableElements = document.querySelectorAll(".draggable");
//const는 상수 / draggableElements는 .draggable이 붙은 모든 객체를 가져온다.
const droppableElements = document.querySelectorAll(".droppable");
//const는 상수 / dropbaleElements는 .droppable이 붙은 모든 객체를 가져온다.
draggableElements.forEach(elem => {
	elem.addEventListener("dragstart", dragStart);
	// 사용자가 항목을 끌기 시작하면 즉시 발생 - 여기에서 드래그 데이터를 정의할 수 있습니다.
});
droppableElements.forEach(elem => {
	elem.addEventListener("dragenter", dragEnter);
	// 끌어온 항목이 올바른 드롭 대상에 들어갈 때 발생합니다.
	elem.addEventListener("dragover", dragOver);
	// 끌어서 놓기 가능한 항목이 드롭 영역 내에 있는 동안 끌어다 놓은
	// 항목이 유효한 드롭 대상 위로 반복적으로 끌 때 발생합니다.
	elem.addEventListener("dragleave", dragLeave);
	// Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
	// 끌어온 항목이 유효한 드롭 대상을 벗어날 때 발생합니다. / 끌어서 드롭 영역이 아닌곳에 넣을때
	elem.addEventListener("drop", drop); 
	// 항목이 유효한 드롭 대상에 놓일 때 발생합니다. / 끌어서 드롭 영역인 곳에 넣을때
});
///////////////////////////////////////////////////////////////
////////// Drag and Drop Functions // 드래그 앤 드랍 기능//////////
//////////////////////////////////////////////////////////////
//	Events fired on the drag target
//  드래그 타겟에서 시작되는 이벤트 
function dragStart(event) {
	event.dataTransfer.setData("text", event.target.id);
}
let hiddenCount = 0;
let hidden = function(event){	//event 객체  전달
				switch (event.type){
				case "click":	hiddenCount++;
								if(hiddenCount % 7 ==0){
								swal({
  title: "숨겨진 기능",
  text: "게임에 집중하세요!!!!",	
  icon: "warning",
  button: "시작"
});
								}
								}
				}
				let btn1 = document.getElementById("bell");
				let btn2 = document.getElementById("moon");
				bell.onclick = hidden;
				moon.onclick = hidden;
//////////////////////////////////////////////////////////////////////
// Events fired on the drop target
// 드랍되는 타겟으로부터 시작되는 이벤트 
function dragEnter(event) {
	// 드래그해서 특정영역으로 들어왔을때
	if (!event.target.classList.contains("dropped")) {
	// 이벤트의 타겟이 dropped의 클래스를 가지고 있지 않을 경우
		event.target.classList.add("droppable-hover");
	// 이벤트의 타겟에 droppable-hover의 클래스를 넣어줍니다.
	}
}
function dragOver(event) {
	// 드래그해서 특정영역에 들어가있는 상태
	if (!event.target.classList.contains("dropped")) {
	// 이벤트의 타겟이 dropped의 클래스를 가지고 있지 않을 경우
		event.preventDefault(); // Prevent default to allow drop
	}
}
function dragLeave(event) {
	if (!event.target.classList.contains("dropped")) {
		event.target.classList.remove("droppable-hover");
	}
}
let successCounter = 0;
//localStorage.dragCounter = 0; 
let tempCounter = 0;
let fails = 0;
function drop(event) {
	event.preventDefault(); // 이는 브라우저의 데이터 기본 처리를 방지하기 위한 것입니다.
	event.target.classList.remove("droppable-hover"); // droppable-hover의 클래스를 지워준다.
	const draggableElementData = event.dataTransfer.getData("text"); 
	//끌어온 데이터를 가져옵니다. 이 메서드는 setData() 메서드에서 동일한 형식으로 설정된 모든 데이터를 반환합니다.
	const droppableElementData = event.target.getAttribute("data-draggable-id");
	//드롭되는 곳의 아이디를 가져옵니다.
	const isCorrectMatching = draggableElementData === droppableElementData;
	if (isCorrectMatching) {
		const draggableElement = document.getElementById(draggableElementData);
		event.target.classList.add("dropped");
		// event.target.style.backgroundColor = draggableElement.style.color; // This approach works only for inline styles. A more general approach would be the following: 
		event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
		draggableElement.classList.add("dragged");
		draggableElement.setAttribute("draggable", "false");
		event.target.insertAdjacentHTML("afterbegin", `<i class="fas fa-${draggableElementData}"></i>`);
		tempCounter++;
		console.log("tempCounter:"+tempCounter);
		if(tempCounter==5){
		tempCounter+=fails;
		localStorage.dragCounter=tempCounter;
		console.log("최종"+localStorage.dragCounter);
			success();
		}
	}else{ // 잘못 넣었을때
		fails++;
		fail();
		console.log("fails: "+fails);
	}
}
function success(){
swal ( {
  text : " 참 잘하셨어요! " ,
  icon : "success",
  button: "돌아가기"
} ) ;
}
//let i = 
//\n
//<p></p>
function fail(){
swal ( {
  text : "단어와 맞지 않는 그림이에요!",
  icon : "error",
  button: "돌아가기"
} ) ;
}
////////
// localStorage.dragCounter
// "저번에는 "+localStorage.dragCouner+"만에 맞췄어요!";