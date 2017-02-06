//OnInit library activates as soon as the page loads
import { Component, OnInit } from '@angular/core';
//ActivatedRoute and Params are necessary for dynamic routing
import { ActivatedRoute, Params } from '@angular/router';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-show',
	templateUrl: 'proposal-show.component.html'

})
export class ProposalShowComponent implements OnInit {
	id: number;
	routeId: any;
	//dependency injection: let our component know as soon as a new class has been instantiated
	constructor(
		private route: ActivatedRoute
		){}

	ngOnInit(): void {
		//subscribe gives access to object you want to communicate with
		this.routeId = this.route.params.subscribe(
			params=>{
				//the + on params turns string from the url into number
				this.id = +params['id'];
			}
			)
	}
}