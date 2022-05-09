import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ThoughtsComponent } from './thoughts-feature/thoughts/thoughts.component';
import { BubbleComponent } from './thoughts-feature/bubble/bubble.component';
import { NewBubbleComponent } from './thoughts-feature/new-bubble/new-bubble.component';
import { BubbleModalComponent } from './thoughts-feature/bubble-modal/bubble-modal.component';
import { MoneyComponent } from './money/money/money.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThoughtsComponent,
    BubbleComponent,
    NewBubbleComponent,
    BubbleModalComponent,
    MoneyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
