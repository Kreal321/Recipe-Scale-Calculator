import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './core/components/nav/nav.component';
import { FooterComponent } from './core/components/footer/footer.component';

import { HomeModule } from "./features/home/home.module";
import { CalculatorsModule } from "./features/calculators/calculators.module";



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCollapseModule,
    HomeModule,
    CalculatorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
