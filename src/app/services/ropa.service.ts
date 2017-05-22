import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
	public nombrePrenda: string = 'Pantalones vaqueros';
	public coleccionRopa = [
		'Pantalones Blancos',
		'Camiseta Roja'
	]

	prueba(nombrePrenda) {
		return nombrePrenda;
	}

	addRopa(nombrePrenda: string): Array<string> {
		this.coleccionRopa.push(nombrePrenda);
		return this.getRopa();
	}

	getRopa(): Array<string> {
		return this.coleccionRopa;
	}

	deleteRopa(index: number) {
		this.coleccionRopa.splice(index, 1);
		return this.getRopa();
	}

}