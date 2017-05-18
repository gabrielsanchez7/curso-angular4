import { Component } from '@angular/core';

@Component({
	selector: 'fruta',
	templateUrl: './fruta.component.html'
	// template: `
	// 	<h2>{{nombreComponente}}</h2>
	// 	<p>{{listadoFrutas}}</p>
	// `
})

export class FrutaComponent {
	public nombreComponente = 'Componente de fruta';
	public listadoFrutas = 'Naranja, Manzana, Pera y Sandia.';

	public nombre : string;
	public edad : number;
	public mayorEdad : boolean;
	public trabajos : Array<any> = ['Carpintero', 'Fontanero', 2];
	comodin:any;

	constructor(){
		this.nombre = 'Gabriel Sánchez',
		this.edad = 22;
		this.mayorEdad = true;
		this.comodin = 'Si ' + 2 + ' ' + false;
	}

	ngOnInit() {
		this.cambiarNombre();
		this.cambiarEdad(22);
		console.log(this.nombre + ' ' + this.edad);

		// Variables y alcance
		var uno = 8;
		var dos = 15;

		if(uno === 8) {
			let uno = 3;
			var dos = 88;
			console.log('Dentro del if: ' + uno);
		}
		console.log('Fuera del if: ' + uno);
	}

	cambiarNombre(){
		this.nombre = 'Gerardo Villacorta';
	}

	cambiarEdad(edad){
		this.edad = edad;
	}

}