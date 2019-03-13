		//Defino la función y la variable
		var palabra = prompt("Inserta tu palabra:");
		function palindromoComprobar()
		{

			//El split tiene que estar en minúsculas, lo convierto
			var minuscula = palabra.toLowerCase();

			//Ahora el split lo convierto en array
			var matriz = minuscula.split("");

			//Elimino los espacios en blanco entre las letras
			var sinEspacios = "";
			for (i in matriz) {
				if (matriz[i] != " ") {
					sinEspacios += matriz[i];
				}
			}
			//Dentro del array que se crea
			var nuevoArray = sinEspacios.split("");
			var alReves = nuevoArray.reverse();

			//Veo si la condición se cumple o no y lanzo el aviso pertinente
			palindromo = true;

			var a = alReves.length - 1;
			for (var i=0; i<nuevoArray.length; i++)
			{
				if (nuevoArray[i] != alReves[a])
				{
					palindromo = false;
				};
				a--;
			}
			if (palindromo)
			{
				return("La palabra " + palabra + " es un palíndromo");
			}
			else
			{
				return("La palabra " + palabra + " no es un palíndromo");
			}
		}
		alert(palindromoComprobar(palabra));