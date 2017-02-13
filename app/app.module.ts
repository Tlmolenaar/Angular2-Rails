import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentService } from './documents/document.service';
import { ProposalListComponent } from './proposals/proposal-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ProposalNewComponent } from './proposals/proposal-new.component';
import { ProposalShowComponent } from './proposals/proposal-show.component';



@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		NgbModule.forRoot(),
		HttpModule
	],
	declarations: [
		AppComponent,
		HomepageComponent,
		DocumentsComponent,
		ProposalListComponent,
		ProposalNewComponent,
		ProposalShowComponent
	],
	providers: [
		DocumentService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}