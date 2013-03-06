var myLayout;

jQuery(document).ready(function() {
	calculateHeightLayout();
	//cuando cambie el tamaño de navegador volve calcular la altura
	jQuery(window).resize(function(e) {
		calculateHeightLayout();
	});
});

function calculateHeightLayout(){
	jQuery("#navegador").css("height", Math.floor(jQuery(window).height() - 80)+"px"); 
	postLoad();
}

function postLoad(){
	if(myLayout != undefined)
	{
		myLayout.sizePane('south', Math.floor(jQuery('#navegador').height() / 3));
	}
}

/* Funcion de mostar la modal de pedticiones Ajax */

function start() {
	statusDialog.show();
}

function stop() {
	statusDialog.hide();
}