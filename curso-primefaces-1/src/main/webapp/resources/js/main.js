var isVisibleNorte = false;
var clickedAwayNorte = false;

var isVisibleSur = false;
var clickedAwaySur = false;

var isVisibleEste = false;
var clickedAwayEste = false;

var isVisibleOeste = false;
var clickedAwayOeste = false;


/* funciones que se realizar al carga la pagina */

$(document).ready(function() {

	var content = $('#norte').attr("id");
	if(content != undefined)
	{
		$('#form\\:popoverNorte').popover({
			placement : 'top',
			animation : true,
			trigger : 'manual',
			html : true,
			content: $('#norte').html()
		}).click(function(e) {
	        $(this).popover('show');
	        clickedAwayNorte = false,
	        isVisibleNorte = true,
	        e.preventDefault();
	    });		
	}
	
	
	var content = $('#sur').attr("id");
	if(content != undefined)
	{
		$('#form\\:popoverSur').popover({
			placement : 'bottom',
			animation : true,
			trigger : 'manual',
			html : true,
			content: $('#sur').html()
		}).click(function(e) {
	        $(this).popover('show');
	        clickedAwaySur = false,
	        isVisibleSur = true,
	        e.preventDefault();
	    });		
	}
	
	var content = $('#este').attr("id");
	if(content != undefined)
	{
		$('#form\\:popoverEste').popover({
			placement : 'right',
			animation : true,
			trigger : 'manual',
			html : true,
			content: $('#este').html()
		}).click(function(e) {
	        $(this).popover('show');
	        clickedAwayEste = false,
	        isVisibleEste = true,
	        e.preventDefault();
	    });		
	}
	
	var content = $('#oeste').attr("id");
	if(content != undefined)
	{
		$('#form\\:popoverOeste').popover({
			placement : 'left',
			animation : true,
			trigger : 'manual',
			html : true,
			content: $('#oeste').html()
		}).click(function(e) {
	        $(this).popover('show');
	        clickedAwayOeste = false,
	        isVisibleOeste = true,
	        e.preventDefault();
	    });		
	}

});

/* Funcion para evitar el cierre del popover del norte  */

$(document).click(function(e) {
	  if(isVisibleNorte & clickedAwayNorte)
	  {
	    $('#form\\:popoverNorte').popover('hide');
	    isVisibleNorte = clickedAwayNorte = false;
	  }
	  else
	  {
		  clickedAwayNorte = true;
	  }
});

$(document).click(function(e) {
	  if(isVisibleSur & clickedAwaySur)
	  {
	    $('#form\\:popoverSur').popover('hide');
	    isVisibleSur = clickedAwaySur = false;
	  }
	  else
	  {
		  clickedAwaySur = true;
	  }
});

$(document).click(function(e) {
	  if(isVisibleEste & clickedAwayEste)
	  {
	    $('#form\\:popoverEste').popover('hide');
	    isVisibleEste = clickedAwayEste = false;
	  }
	  else
	  {
		  clickedAwayEste = true;
	  }
});

$(document).click(function(e) {
	  if(isVisibleOeste & clickedAwayOeste)
	  {
	    $('#form\\:popoverOeste').popover('hide');
	    isVisibleOeste = clickedAwayOeste = false;
	  }
	  else
	  {
		  clickedAwayOeste = true;
	  }
});



/* Funcion de mostar la modal de pedticiones Ajax */

function start() {
	statusDialog.show();
}

function stop() {
	statusDialog.hide();
}