/**
 * @author 김 민
 */

$(document).ready(function(){
	init();
});

function init(){
	informationLoad();
	contentsLoad();
	modalsLoad();
	heightResize();
}

// height resize
function heightResize(){
	let windowHeight = window.innerHeight;
	let documentHeight = $("html, body");
	documentHeight.css('height', windowHeight);
}

// information component load
function informationLoad(){
	$("#information").load("/src/components/information/information.html");
}

// contents component load
function contentsLoad(){
	$("#contents").load("/src/components/contents/contents.html");
}

// modal component load
function modalsLoad(){
	$("#modals").load("/src/components/modal/index.html");
}

// information fold
function handleFold(){
	$(this).toggleClass("isFold");
	$(".information").toggleClass("isFold");
}

// modal open
function handleModalOpen(){
	$(".modal").show();
}

// modal close
function handleModalClose(){
	$(".modal").hide();
}
