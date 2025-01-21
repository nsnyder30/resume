import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';

const routes: Routes = [
]

@NgModule({
	declarations: [
		AppComponent, 
	], 
	imports: [
		BrowserModule, 
		HttpClientModule, 
	], 
	exports: [
	], 
	providers: [DatePipe], 
	bootstrap: [AppComponent]
})

export class AppModule { }
