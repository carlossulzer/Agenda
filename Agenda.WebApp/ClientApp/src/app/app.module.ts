
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CompromissoComponent } from './compromisso/compromisso.component';
import { PacienteCadastroComponent } from './paciente/cadastro/paciente-cadastro.component';
import { PacientePesquisaComponent } from './paciente/pesquisa/paciente-pesquisa.component';
import { UsuarioCadastroComponent } from './usuario/cadastro/usuario-cadastro.component';
import { UsuarioPesquisaComponent } from './usuario/pesquisa/usuario-pesquisa.component';

import { NgxCurrencyModule } from "ngx-currency";
//import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ngx-currency/src/currency-mask.config";


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {RadioButtonModule, RadioButton} from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';
import { ConfirmDialogModule, ConfirmationService, SharedModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CompromissoComponent,
    PacienteCadastroComponent,
    PacientePesquisaComponent,
    UsuarioCadastroComponent,
    UsuarioPesquisaComponent
      ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxCurrencyModule,
    RadioButtonModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    ToolbarModule,
    ConfirmDialogModule,
    InputTextModule,
    SharedModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'usuario-cadastro', component: UsuarioCadastroComponent },
      { path: 'usuario-pesquisa', component: UsuarioPesquisaComponent },
      { path: 'paciente-cadastro', component: PacienteCadastroComponent },
      { path: 'paciente-pesquisa', component: PacientePesquisaComponent},
      { path: 'compromisso', component: CompromissoComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
