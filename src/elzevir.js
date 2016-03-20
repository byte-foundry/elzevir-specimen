// Setup fonts
Ptypo.createFont('elzevir-regular', 'elzevir').then( function() {
	Ptypo.changeParam(90, 'thickness', 'elzevir-regular');
	loaded('elzevir-regular');
});
Ptypo.createFont('elzevir-light', 'elzevir').then( function() {
	Ptypo.changeParam(40, 'thickness', 'elzevir-light');
	loaded('elzevir-light');
});
Ptypo.createFont('elzevir-bold', 'elzevir').then( function() {
	Ptypo.changeParam(120, 'thickness', 'elzevir-bold');
	loaded('elzevir-bold');
});
Ptypo.createFont('elzevir-caption', 'elzevir').then( function() {
	Ptypo.changeParam(100, 'thickness', 'elzevir-caption');
	Ptypo.changeParam(700, 'xHeight', 'elzevir-caption');
	Ptypo.changeParam(1.8, 'width', 'elzevir-caption');
	loaded('elzevir-caption');
});
Ptypo.createFont('elzevir-sans', 'elzevir').then( function() {
	Ptypo.changeParam(1, 'serifWidth', 'elzevir-sans');
	Ptypo.changeParam(1, 'serifHeight', 'elzevir-sans');
	loaded('elzevir-sans');
});

var itemLoaded = 0;
function loaded( el ) {
	$('#' + el + ' > span').html('<img src="img/loaded.svg" />');
	itemLoaded++;

	if( itemLoaded == 5 ){
		$('#loading').hide();
	}
}

$( document ).on( "mousemove", function( event ) {
	centerH = (event.pageX - $( document ).width() / 2) / $( document ).width();
	centerV = (event.pageY - $( document ).height() / 2) / $( document ).height();
	console.log( "H: " + centerH + ", V: " + centerV );

	var bold = Ptypo.getParam('thickness', 'elzevir-bold');
	Ptypo.changeParam(120 * (1 + centerH), 'thickness', 'elzevir-bold');
	$('.elzevir-bold > .value > .int').html(bold.toFixed(2));

	var regular = Ptypo.getParam('thickness', 'elzevir-regular');
	Ptypo.changeParam(90 * (1 + centerH), 'thickness', 'elzevir-regular');
	$('.elzevir-regular > .value > .int').html(regular.toFixed(2));

	var light = Ptypo.getParam('slant', 'elzevir-light');
	Ptypo.changeParam(15 * (1 + centerH), 'slant', 'elzevir-light');

	var sans = Ptypo.getParam('xHeight', 'elzevir-sans');
	Ptypo.changeParam(800 * (1 + centerH), 'xHeight', 'elzevir-sans');
	$('.elzevir-sans > .value > .int').html(sans.toFixed(2));

	// var sansW = Ptypo.getParam('serifWidth', 'elzevir-sans');
	// var sansH = Ptypo.getParam('serifHeight', 'elzevir-sans');
	// Ptypo.changeParam(90 * (1 + centerH), 'serifWidth', 'elzevir-sans');
	// Ptypo.changeParam(50 * (1 + centerH), 'serifHeight', 'elzevir-sans');
	// $('.elzevir-sans > .value > .int.width').html(sansH.toFixed(2));
	// $('.elzevir-sans > .value > .int.height').html(sansH.toFixed(2));
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
