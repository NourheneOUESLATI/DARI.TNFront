import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddbankComponent } from './addbank/addbank.component';
import { CreditsimulationComponent } from './creditsimulation/creditsimulation.component';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BanksComponent } from './banks/banks.component';
import { CreditsComponent } from './credits/credits.component';
import { UpdatebankComponent } from './updatebank/updatebank.component';
import { ChatComponent } from './chat/chat.component';
import {ChartsModule} from 'ng2-charts';
const ROUTES: Routes = [
  {path : 'creditsimulation', component : CreditsimulationComponent},
  {path : 'addbank', component: AddbankComponent},
  {path : 'banks' , component: BanksComponent},
  {path : 'credits' , component: CreditsComponent},
  {path: 'updatebank/:id', component: UpdatebankComponent},
  {path: 'chat', component: ChatComponent},
  {path: '', redirectTo: 'banks', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AddbankComponent,
    CreditsimulationComponent,
    BanksComponent,
    CreditsComponent,
    UpdatebankComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
