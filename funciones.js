var c=document.getElementById("prueba");
var ctx=c.getContext("2d");

// Create gradient
var grd=ctx.createLinearGradient(0,0,500,0);
grd.addColorStop(0,"#800000");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle=grd;
ctx.fillRect(0,0,500,20);
// segunda barra
var a = document.getElementById("barra_costado");
var aa = a.getContext("2d");

var aaa=aa.createLinearGradient(300,0,0,0);
aaa.addColorStop(0,"#800000");
aaa.addColorStop(1,"white");

aa.fillStyle=aaa;
aa.fillRect(0,0,300,20);

var mod=" ";
var impresion= "";
javascript:getUserData('');
function getUserData(id){
$("#imprecion").html("");
  $.getJSON( window.path+'ind/getUserData/' + id, function(data) {	
		$.each(data, function(key, val) {	
			id= val.user_id;
			$("#imprecion").append("<div style='border-bottom:1px solid black; float:left;width: 440px;; height:20px; margin-bottom:3px'>"+ (key+1)+": "+val.name+" "+"<a style='text-decoration:none; float:right;' title='eliminar' href='javascript:borrar("+id+")'><img src='"+window.path+"app/views/images/borrar.png'></a>"+"<a style='text-decoration:none; float:right; margin-right:8px;' title='modificar' href='javascript:Modificar("+id+")'><img src='"+window.path+"app/views/images/modificar.png'></a> <br>"+"</div>");	 
			});
	});
}

function Modificar(id){	
	$.getJSON( window.path+'ind/modificar/'+id, function(data) {	
	$.each(data, function(key, val) {
		mod=val.user_id;
		$("#resultado").html("modificando:<br> "+" "+val.name+" "+val.user_id);
		$("#name").val(val.name);						
		});
	javascript:Variable(mod);
	});	
	javascript:getUserData('');
}

function setUser(mod){	
	$.ajax({
		type: "POST",
		url: window.path + 'ind/archivo/'+mod,
		data: { name: $("#name").val() }
	}).done(function( msg ) {
		mod = " ";
		$("#resultado").html("se a agregado: <br> "+$("#name").val());
		$("#name").val(" ");
		javascript:getUserData('');
		javascript:Variable(mod);
	});	
}

function borrar(id){
	$.getJSON( window.path+'ind/delete/'+id, function(data) {	
	$.each(data, function(key, val) {
		$("#resultado").html("se a eliminado:<br> "+" "+val.name);
		});		
	});
	javascript:getUserData('');	
}

function Variable(mod){
	impresion=mod;
}
$("#mod").html("<input type='button' value='agregar' onclick='javascript:setUser(impresion) '><br>");









