import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['document.component.css']
})

export class DocumentsComponent{
	documents: Document[] = [
	{
		title: "My First Doc",
	description: "dsgsfgfdgd",
	file_url: "weqfgffdssfg",
	updated_at: "today",
	image_url: "http://www.businessnewsdaily.com/images/i/000/006/605/original/freelance-tech-tools.jpg?1407957472",
	},
	{
		title: "poep",
	description: "poep",
	file_url: "poep",
	updated_at: "poep",
	image_url: "http://www.businessnewsdaily.com/images/i/000/006/605/original/freelance-tech-tools.jpg?1407957472",
	},
	{
		title: "My last doc",
	description: "hoi",
	file_url: "gdfgdd",
	updated_at: "fdsggfd",
	image_url: "http://www.businessnewsdaily.com/images/i/000/006/605/original/freelance-tech-tools.jpg?1407957472",
	}
	]
	
}
