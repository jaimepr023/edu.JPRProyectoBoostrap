/**
 * 
 */

var BDDProductos = [];

function verificarContrasenia() {
	let contrasena1 = document.getElementById("exampleInputPassword1").value;
	let contrasena2 = document.getElementById("exampleInputPassword2").value;
	if (contrasena1 === contrasena2) {
		return true;
	} else {
		alert("Las contraseñas no son iguales, por favor intentelo de nuevo");
		document.getElementById("exampleInputPassword2").focus();
		return false;
	}
}

function verificarContrasenia1() {
	let contrasena3 = document.getElementById("exampleInputPassword3").value;
	let contrasena4 = document.getElementById("exampleInputPassword4").value;
if (contrasena3 === contrasena4) {
		return true;
	} else {
		alert("Las contraseñas no son iguales, por favor intentelo de nuevo");
		document.getElementById("exampleInputPassword4").focus();
		return false;
	}
}

const todasLasMotos = [[4500,"KTM Duke 125",0],[7000,"Aprilia RS 475", 0],[30000,"Yamaha YZF-R1", 0],[13200,"Yamaha R6 Race",0],[15500,"Honda VT 1300 CX FURY",0],[10500,"Honda CRF450R",0],[4000,"Kymco Super Dink",0],[4700,"Primavera 125 Euro 5",0]];