import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { NavComponent } from './core/components/nav/nav.component';
import { FooterComponent } from './core/components/footer/footer.component';

import { HomeModule } from "./features/home/home.module";
import { CalculatorsModule } from "./features/calculators/calculators.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MdbCollapseModule,
    HomeModule,
    CalculatorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
