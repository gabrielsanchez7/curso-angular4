import { Component } from '@angular/core';

@Component({
	selector: 'plantilla',
	templateUrl: './plantillas.component.html'
})

export class PlantillasComponent {

	public titulo;
	public administrador;

	constructor() {
		this.titulo = 'Plantillas nGTemplate en Angular';
		this.administrador = true;
	}

	cambiar(value){
		this.administrador = value;
	}

}