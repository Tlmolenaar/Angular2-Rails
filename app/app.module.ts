import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposals/proposal-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ProposalNewComponent } from './proposals/proposal-new.component';
@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	declarations: [
		AppComponent,
		HomepageComponent,
		DocumentsComponent,
		ProposalListComponent,
		ProposalNewComponent
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}