import { MoneyComponent } from './money/money/money.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThoughtsComponent } from './thoughts-feature/thoughts/thoughts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'thoughts', component: ThoughtsComponent },
  { path: 'money', component: MoneyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
