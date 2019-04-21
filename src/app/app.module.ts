import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { PastebinComponent } from './pastebin/pastebin.component';
import { AddPasteComponent } from './add-paste/add-paste.component';
import { ViewPasteComponent } from './view-paste/view-paste.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// Service for Pastebin

import { PastebinService } from './pastebin.service';

// Modules used in this tutorial
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';



// In memory Web api to simulate an http server
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


const appRoutes: Routes = [
  { path: '', component: PastebinComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    PastebinComponent,
    AddPasteComponent,
    ViewPasteComponent,
    AboutComponent,
    ContactComponent,

  ],

   imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot(appRoutes),

  ],
  providers: [PastebinService],
  bootstrap: [AppComponent]
})
export class AppModule {}
