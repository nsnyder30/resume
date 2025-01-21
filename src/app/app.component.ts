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
			company: {
				cname: 'Qorvo, Inc.', 
				cstart: '2018', 
				cend: 'Present'
			}, 
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
				{ desc: '<b>Primary Role:</b> Lead the design, development, and maintenance of critical manufacturing reporting systems, ensuring seamless operations through robust web applications, real-time data integration, and secure, scalable infrastructure', 
				  techs: []}, 
				{ desc: 'Migrated reporting server backend to a redundant multi-server architecture, eliminating recurring crashes (previously 2-3 per month) and ensuring near-100% uptime by resolving systemic flaws that caused service interruptions', 
				  techs: ['JavaScript','PHP','MySQL','Apache']}, 
				{ desc: 'Developed failover system for critical photolithography databases, ensuring seamless operations during network outages<br>', 
				  techs: ['JavaScript', 'PHP', 'MySQL']}, 
				{ desc: 'Built interactive fab map with live tool-state data, improving factory visualization and navigation',
				  techs: ['JavaScript', 'AngularJS', 'SVG', 'PHP']}, 
				{ desc: 'Optimized reporting tools, reducing page load times by 90%, saving 500+ hours per month in productivity', 
				  techs: ['JavaScript', 'PHP', 'MySQL']}, 
				{ desc: 'Enhanced system security by implementing parameterized queries to prevent SQL injection, deploying SSL encryption, transitioning to a dynamic role-based permission system, and relocating plain-text API credentials to a secure configuration file outside the web root.',
				  techs: ['JavaScript', 'PHP', 'Apache']}, 
				{ desc: 'Designed and implemented an advanced PTO calendar system, integrating LDAP for real-time employee data updates and enabling supervisors to manage schedules, approve PTO requests, and plan headcount',
				  techs: ['JavaScript', 'AngularJS', 'PHP', 'MySQL']}, 
			]
		}, 
		{
			company: {
				cname: 'Drug Delivery Experts', 
				cstart: '2017', 
				cend: '2018'
			}, 
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
				{ desc: 'Built networked inventory tracking system, eliminating concurrency issues and automating expense reimbursement invoicing process, saving $10,000 in monthly expenses', 
				  techs: ['MS Access','VBA']}, 
				{ desc: 'Coordinated agreements and communications for 5-10 clients simultaneously, ensuring efficient project execution', 
				  techs: []}
			]
		}, 
		{
			company: {
				cname: 'Charter Equity Research', 
				cstart: '2008', 
				cend: '2012'
			}, 
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
				{ desc: 'Developed dynamic named array reference system for financial models, enabling seamless data updates and improving quarterly reporting workflow', 
				  techs: ['MS Excel','VBA']}, 
				{ desc: 'Integrated client database with call-tracking software to streamline workflows', 
				  techs: ['MS Access', 'VBA']}
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

	constructor() {
	}

	app_list(type: string, obj: any) {
		switch(type) {
			case 'techs':
				return '('+obj.sort().join(', ')+')';
				break;
			default:
			 return '';
		}
		return '';
	}
	ngOnInit() {
	}
}
