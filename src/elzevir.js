// Setup fonts
Ptypo.createFont('elzevir-book', 'elzevir').then( function() {
	Ptypo.changeParam(80, 'thickness', 'elzevir-book');
	loaded('elzevir-book');
});
Ptypo.createFont('elzevir-bold', 'elzevir').then( function() {
	Ptypo.changeParam(120, 'thickness', 'elzevir-bold');
	loaded('elzevir-bold');
});
Ptypo.createFont('elzevir-sans', 'elzevir').then( function() {
	Ptypo.changeParam(1, 'serifWidth', 'elzevir-sans');
	Ptypo.changeParam(1, 'serifHeight', 'elzevir-sans');
	loaded('elzevir-sans');
});

var itemLoaded = 0;
function loaded( el ) {
	$('#' + el + ' > span').html('<img width="25" src="img/loaded.svg" />');
	itemLoaded++;

	if( itemLoaded == 3 ){
		$('#loading').slideUp();
	}
}

$( document ).on( "mousemove", function( event ) {
	centerH = (event.pageX - $( document ).width() / 2) / $( document ).width();

	var bookH = Ptypo.getParam('serifHeight', 'elzevir-book');
	Ptypo.changeParam(15 * (1 + centerH), 'serifHeight', 'elzevir-book');
	$('.elzevir-book > .value > .int.sh').html(bookH.toFixed(0));
	var bookT = Ptypo.getParam('thickness', 'elzevir-book');
	Ptypo.changeParam(80 * (1 + centerH), 'thickness', 'elzevir-book');
	$('.elzevir-book > .value > .int.t').html(bookT.toFixed(0));
	var bookw = Ptypo.getParam('width', 'elzevir-book');
	Ptypo.changeParam((1 + centerH), 'width', 'elzevir-book');
	$('.elzevir-book > .value > .int.w').html(bookw.toFixed(2));

	var bold = Ptypo.getParam('thickness', 'elzevir-bold');
	Ptypo.changeParam(120 * (1 + centerH), 'thickness', 'elzevir-bold');
	$('.elzevir-bold > .value > .int').html(bold.toFixed(0));

	var sans = Ptypo.getParam('xHeight', 'elzevir-sans');
	Ptypo.changeParam(800 * (1 + centerH), 'xHeight', 'elzevir-sans');
	$('.elzevir-sans > .value > .int').html(sans.toFixed(0));
});

$('#zoom-in').click(function() {
   updateZoom(0.1);
});

$('#zoom-out').click(function() {
   updateZoom(-0.1);
});

zoomLevel = 1;

var updateZoom = function(zoom) {
   zoomLevel += zoom;
   $('body').css({ zoom: zoomLevel, '-moz-transform': 'scale(' + zoomLevel + ')' });
}
