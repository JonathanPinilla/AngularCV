import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {MatButtonModule} from "@angular/material/button";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IndexComponent} from './pages/index/index.component';
import {MatTabsModule} from "@angular/material/tabs";
import {ExpereinceComponent} from './pages/expereince/expereince.component';
import {PersonalReferencesComponent} from './pages/personal-references/personal-references.component';
import {FamilyReferencesComponent} from './pages/family-references/family-references.component';
import {StudiesComponent} from './pages/studies/studies.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ExpereinceComponent,
    PersonalReferencesComponent,
    FamilyReferencesComponent,
    StudiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
