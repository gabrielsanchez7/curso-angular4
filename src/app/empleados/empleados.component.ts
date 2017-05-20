import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
	selector: 'empleado',
	templateUrl: './empleados.component.html'
})

export class EmpleadosComponent {
	public titulo = 'Componente Empleados';
	public empleado: Empleado;
	public trabajadores:Array<Empleado>;
	public trabajadorExterno: boolean;
	public color: string;
	public colorSelect: string;

	constructor(){
		this.empleado = new Empleado('David Lopez', 45, 'cocinero', true);
		this.trabajadores = [
			new Empleado('Manolo Martinez', 35, 'Administrativo', true),
			new Empleado('Ana López', 25, 'Cocinera', true),
			new Empleado('Gabriel Sánchez', 22, 'Programador', false),
		];
		this.trabajadorExterno = true;
		this.color = 'green';
		this.colorSelect = '#ccc';
	}

	ngOnInit(){
		console.log(this.empleado);
		console.log(this.trabajadores);
	}

	cambiarExterno(valor){
		this.trabajadorExterno = valor;
	}

	logColorSelect(){
		console.log(this.colorSelect);
	}

}
