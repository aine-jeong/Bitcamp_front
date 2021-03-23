
var draggableElements = document.getElementsByClassName("draggable-elements");
var droppablaElements = document.getElementById("here");

/* 드래그 허용 (기본동작 막기 실행) */
function allowDrop(e){
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id)
    // 드래그시작시, 드래그 당하고있는 해당 객체의 id를 담는다.
}

/* 드랍박스 영역 */
function drop(e) {
    e.preventDefault(); // 기본 동작 막기 (다른 요소의 위에 위치할 수 있도록 만들어주는 것)

    var data = e.dataTransfer.getData("text");
	// 드래그 시작시 담아둔 정보를 get
	
	// 해당 정보(id)의 정보에 따라 다르게 처리하기 위한 함수
	switch(data){
		case 'mhc': mhc();
					break;
		case 'bsh': bsh();
					break;
		case 'bbs': bbs();
					break;
		case 'hjs': hjs();
					break;
		case 'ain': ain();
					break;
	}
}


// 해당 미모지가 드랍박스에 드랍될 때 띄울 SweetAlert실행
function mhc() {
    swal("‘난 코딩이 안 될 때면 하늘을 봐’ 하늘에서 코드를 받는 남자 문.형.철")
}

function bsh() {
    swal("모른다면서요.... 모른다면서 다 할 줄 아는 4조의 아수라백작! 박선희")
}

function bbs() {
    swal("부드러움 속에 강한 추진력. MacBook같은 남자, 백보성")
}

function hjs() {
    swal("자는거 아니야 눈 감고 생각한거야.’ 생각할 때 코고는 남자, 하준수")
}

function ain() {
    swal("그녀의 미간과 눈썹이 찡그려질 때마다 기가 막힌 코드가 나와요 제가 봤어요. 4조의 장인 정아인")
}