import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'conversor'
})

export class ConversorPipe implements PipeTransform {
	transform(value, por){
		let valueOne = parseInt(value);
		let valueTwo = parseInt(por);

		let result = 'La multiplicacíon es: ' + valueOne + 'x' + valueTwo + ' = ' + (valueOne * valueTwo);
		return result;
	}
}