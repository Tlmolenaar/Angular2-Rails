import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html',
	styleUrls: ['proposal-list.component.css']
})

export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15, 'Thomas', )
	proposalTwo: Proposal = new Proposal(16, 'Thomas', )
	proposalThree: Proposal = new Proposal(17, 'Thomas', )
	
	proposals: Proposal[]=[
	this.proposalOne,
	this.proposalTwo,
	this.proposalThree,
	]
}