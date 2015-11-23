function doClick(e) {
    alert($.label.text);
}

function registry(){
	//alert("Se está registrando");
	var win=Alloy.createController('registry').getView();
	win.open();
}

function signIn(){
	alert("Está iniciando sesión");
}


$.index.open();
