function more() {
			swal({
				title: "앗, 그런데 LA는 아직 안가봤습니다.",
				icon: "info",
				button: "OK"
			});
		} 
		
let learn_more = function(event) {
	switch (event.type){
		case "click": more();
	}
}

let main_intro = document.getElementById("more");
main_intro.onclick = learn_more;

function yet() {
	swal({
		title: "아직 준비중입니다 ㅠ_ㅠ",
		icon: "error",
		button: "ok"
		});
}

let ham_yet = function(event) {
	switch (event.type){
		case "click": yet();
	}
}

let Hamburger = document.getElementById("Hamburger");
Hamburger.onclick = ham_yet;