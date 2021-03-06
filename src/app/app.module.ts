import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.rounting';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

import { ConversorPipe } from './pipes/conversor.pipe';

@NgModule({
	declarations: [
		AppComponent,
		FrutaComponent,
		EmpleadosComponent,
		HomeComponent,
		ContactoComponent,
		ConversorPipe,
		CochesComponent,
		PlantillasComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		routing
	],
	providers: [appRoutingProviders],
	bootstrap: [AppComponent]
})
export class AppModule { }
