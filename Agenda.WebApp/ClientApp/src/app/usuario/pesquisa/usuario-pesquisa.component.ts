import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
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

   constructor(http: HttpClient, public router: Router)  {
       super(http, router); 

    }

    url = environment.apiUrl+'/usuarios/todos';
    titulo = "Usuários";
    newRoute = '/usuario-cadastro';

    ngOnInit  (){
      this.cols = [
        { field: 'usuarioId', header: 'Código', width: '15%' },
        { field: 'nome', header: 'Nome do Usuário', width : '80%' }
      ]; 
      
      //this.getData(); // this.url);
    }
}



