//event.preventDefault('ArrowDown')
//setTimeout(function(event), 4000);

window.addEventListener('keyup', sDown);
window.addEventListener('keyup', wUp);

setInterval(function(sDown) {}, 6000);

function sDown() {
	if (event.code == 'KeyS') {
	window.scrollBy(0, window.innerHeight);
	console.log('pressed S');
	}
};

function wUp() {
	if (event.code == 'KeyW') {
	window.scrollBy(0, -window.innerHeight);
	console.log('pressed W');
	}
};

//for(let window)