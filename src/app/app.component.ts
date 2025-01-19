import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LayoutService } from './services/layout.service';
import { HeaderService } from './services/header.service';
import { StyleUpdateService } from './services/style-update.service';

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
				{ desc: 'Migrated reporting server backend to redundant multi-server architecture', 
				  techs: ['Apache','PHP','JavaScript','MySQL']}, 
				{ desc: 'Developed failover system for critical photolithography databases, ensuring seamless operations during network outtages', 
				  techs: ['PHP', 'JavaScript', 'MySQL']}, 
				{ desc: 'Built interactive fab map with live tool-state data, improving factory visualization and navigation',
				  techs: ['JavaScript', 'AngularJS', 'PHP', 'SVG', 'MySQL']}, 
				{ desc: 'Optimized reporting tools, reducing page load times by over 95%, saving 500+ hours per month in productivity', 
				  techs: ['PHP', 'JavaScript', 'MySQL']}, 
				{ desc: 'Refactored PHP codebase to implement parameterized queries, enhacning security against SQL injection attacks'}, 
				{ desc: 'Deployed SSL encryption and transitioned static user permissions to a dynamic role-based system'}, 
				{ desc: 'Designed and implemented an advanced PTO calendar system, integrating LDAP for real-time employee data updates and enabling supervisors to manage schedules, approve PTO requests, and assign quality points through an intuitive interface',
				  techs: ['PHP', 'JavaScript', 'AngularJS', 'MySQL']}, 
				{ desc: 'Developed a headcount view for HR, providing a dynamic pivot table for tracking employee assignments across factory zones and shifts, significantly improving operational visibility and decision-making.', 
				  techs: ['PHP', 'JavaScript', 'AngularJS']}
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
				{ desc: 'Built networked inventory tracking system, eliminating concurrency issues and automating expense reimbursement invoicing process, saving $10,000 in expenses (MS Access, VBA)'}, 
				{ desc: 'Coordinated agreements and communications for 5-10 clients simultaenously, ensuring efficient project execution'}
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
				{ desc: 'Developed dynamic named array reference system for financial models, enabling seamless data updates and ipmroving quarterly reporting workflow (MS Excel, VBA)'}, 
				{ desc: 'Integrated client database with call-trakcing software to streamline workflows (MS Access, VBA)'}
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
