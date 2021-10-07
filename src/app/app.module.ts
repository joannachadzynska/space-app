import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { A2sCommModule } from 'a2s-comm';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [AppComponent, HeaderComponent],
    imports: [BrowserModule, AppRoutingModule, A2sCommModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
