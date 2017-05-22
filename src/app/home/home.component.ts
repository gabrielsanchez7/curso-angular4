import { Component } from '@angular/core';
import { RopaService }

from '../services/ropa.service';

@Component({
	selector: 'home',
	templateUrl: 'home.component.html',
	providers: [RopaService]
})

export class HomeComponent{
	public titulo = 'Página principal';
	public listadoRopa: Array<string>;
	public prendaGuardar: string;
	public fecha;
	public nombre = "Gabriel Sánchez";

	constructor(
		private _ropaService: RopaService
	){
		this.fecha = new Date();
	}

	ngOnInit() {
		this.listadoRopa = this._ropaService.getRopa();
		console.log(this._ropaService.prueba('Camiseta Nike'));
	}

	guardarPrenda() {
		this._ropaService.addRopa(this.prendaGuardar);
		this.prendaGuardar = null;
	}

	eliminarPrenda(index: number) {
		this._ropaService.deleteRopa(index);
	}
}