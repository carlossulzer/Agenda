import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { GridPersoncComponent } from './../../Common/grid-personc/grid-personc.component';
import { IUsuario } from './../../../Models/usuarios.interface';

@Component({
  selector: 'app-usuario-pesquisa',
  templateUrl: './usuario-pesquisa.component.html',
  styleUrls: ['./usuario-pesquisa.component.css']
})


export class UsuarioPesquisaComponent extends GridPersoncComponent<IUsuario> implements OnInit {
   url = environment.apiUrl+'/usuarios/todos';

   constructor(http: HttpClient, public router: Router)  {
       super(http, router); 

    }

    ngOnInit  (){
      

      this.titulo = "Usuários";

      this.newRoute = '/usuario-cadastro';

      this.cols = [
        { field: 'usuarioId', header: 'Código', width: '15%' },
        { field: 'nome', header: 'Nome do Usuário', width : '80%' }
      ]; 
    
      
      this.getData(this.http, environment.apiUrl+'/usuarios/todos'); // this.url);
    }
}



