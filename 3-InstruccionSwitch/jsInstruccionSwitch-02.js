function mostrar()
{	/*al seleccionar un mes informar.
	si estamos en Invierno: "Abrigate que hace frio."
	si aún no llego el Invierno: "Falta para el invierno."
	si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
	ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/

	var mesDelAño;
	var mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch( mesDelAño )
	{	
		case "Enero" :
		case "Febrero" :
		case "Marzo" :
		case "Abril" :
		case "Mayo" :
		case "Junio" :
			mensaje = "Falta para el invierno.";
		break;

		case "Julio" :
			mensaje = "Abrigate que hace frio.";
		break;

		case "Agosto" :
			mensaje = "Abrigate que hace frio.";
		break;

		default :
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
		break;

	}
	
	alert(mensaje);
}