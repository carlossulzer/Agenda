import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CompromissoComponent } from './compromisso/compromisso.component';
import { PacienteCadastroComponent } from './paciente/cadastro/paciente-cadastro.component';
import { PacientePesquisaComponent } from './paciente/pesquisa/paciente-pesquisa.component';
import { UsuarioCadastroComponent } from './usuario/cadastro/usuario-cadastro.component';

import { NgxCurrencyModule } from "ngx-currency";

import { RadioButtonModule, RadioButton} from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ToolbarModule} from 'primeng/toolbar';
import { InputTextModule} from 'primeng/inputtext';
import { MessageService} from 'primeng/api'
import { ConfirmDialogModule, SharedModule, MessagesModule, CodeHighlighterModule } from 'primeng/primeng';
import { GridPersoncComponent } from './Common/grid-personc/grid-personc.component';
import { UsuarioPesquisaComponent } from './usuario/pesquisa/usuario-pesquisa.component';
//import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ngx-currency/src/currency-mask.config";
import { UsuarioService } from './services/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CompromissoComponent,
    PacienteCadastroComponent,
    PacientePesquisaComponent,
    GridPersoncComponent,
    UsuarioCadastroComponent,
    UsuarioPesquisaComponent
      ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    RadioButtonModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    ToolbarModule,
    ConfirmDialogModule,
    InputTextModule,
    SharedModule,
    MessagesModule,
    CodeHighlighterModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'usuario-cadastro/:id', component: UsuarioCadastroComponent },
      { path: 'usuario-cadastro', component: UsuarioCadastroComponent },
      { path: 'usuario-pesquisa', component: UsuarioPesquisaComponent },
      { path: 'paciente-cadastro', component: PacienteCadastroComponent },
      { path: 'paciente-pesquisa', component: PacientePesquisaComponent},
      { path: 'compromisso', component: CompromissoComponent },
    ])
  ],
  providers: [MessageService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
