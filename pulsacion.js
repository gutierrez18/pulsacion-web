//alert(" entre aqui")
class Persona
{
	constructor(nombre,apellido,sexo,edad)
	{
		
		this.nombre = nombre;
        this.apellido = apellido;
		this.sexo = sexo;
		this.edad = edad;
		this.pulsacion = 0;
	}
}

var btnCalculate = document.getElementById("calcular");
var resultado =  document.getElementById("resultado");


var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var sexo = document.getElementById("sexo")
var edad =  document.getElementById("edad");


btnCalculate.addEventListener("click",getPersona);

function getPersona()
{
	const persona =  new Persona(nombre.value, apellido.value, sexo.value, edad.value);
	
	if (persona.sexo == 'f' ) {
		persona.pulsacion = (220 - persona.edad) / 10;
	}else
	{
		persona.pulsacion = (210 - persona.edad) / 10;
	}


	resultado.innerHTML = '<strong>' + 'Su pulsacion es: '+ persona.pulsacion+'</strong>';
	Guardar(persona);
	
}

function Guardar(p)
{
	var persona = p;
	var personas = [];

	if(localStorage.getItem('BDLocal') != null)
	{
		personas = JSON.parse(localStorage.getItem('BDLocal'));
	}
	personas.push(persona);
	localStorage.setItem('BDLocal', JSON.stringify(personas));

	
}