import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { TeleconsultationsComponent } from './components/teleconsultations/teleconsultations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'teleconsultations', component: TeleconsultationsComponent },
  { path: '**', redirectTo: '' } // Ruta para manejar errores 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
