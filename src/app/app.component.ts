import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	standalone: false,
	styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
	title = 'angular_app';
	jobs = [
		{
			company: 'Qorvo, Inc.', 
			positions: [
				{
					title: 'Senior Business Systems Analyst', 
					pstart: '2023', 
					pend: 'Present' },
				{
					title: 'Business Systems Analyst III', 
					pstart: '2021', 
					pend: '2023' }, 
				{
					title: 'Business Systems Analyst II', 
					pstart: '2020', 
					pend: '2021' }, 
				{
					title: 'Business Systems Analyst', 
					pstart: '2018', 
					pend: '2021' }
			], 
			duties: [
				'duty1', 
				'duty2'
			]
		}, 
		{
			company: 'Drug Delivery Experts', 
			positions: [
				{
					title: 'Project Manager', 
					pstart: '2017', 
					pend: '2018' },
				{
					title: 'Business Operations Associate', 
					pstart: '2017', 
					pend: '2017' }
			], 
			duties: [
				'duty1', 
				'duty2'
			]
		}, 
		{
			company: 'Charter Equity Research', 
			positions: [
				{
					title: 'Senior Programmer', 
					pstart: '2010', 
					pend: '2012' },
				{
					title: 'Executive Assistant', 
					pstart: '2008', 
					pend: '2010' }, 
			], 
			duties: [
				'duty1', 
				'duty2'
			]
		}
	];
	education = [
		{
			school: 'Georgia Institute of Technology', 
			degree: 'M.S. Computer Science', 
			estart: '2018', 
			eend: '2022'
		}, {
			school: 'University of California, San Diego', 
			degree: 'B.S. Biomedical Engineering', 
			estart: '2013', 
			eend: '2016'
		}
	]

	constructor(private router: Router, 
		    private layoutService: LayoutService, 
		    private headerService: HeaderService, 
		    private styleUpdateService: StyleUpdateService) {
	}

	ngOnInit() {
	}
}
