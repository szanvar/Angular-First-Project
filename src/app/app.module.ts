import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponentComponent } from './demo-component/demo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
