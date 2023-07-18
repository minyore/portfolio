/**
 * @author 김 민
 */

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
	$("#information").load("https://minyore.github.io/portfolio/src/components/information/information.html");
}

// contents component load
function contentsLoad(){
	$("#contents").load("https://minyore.github.io/portfolio/src/components/contents/contents.html");
}

// modal component load
function modalsLoad(){
	$("#modals").load("https://minyore.github.io/portfolio/src/components/modal/index.html");
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
