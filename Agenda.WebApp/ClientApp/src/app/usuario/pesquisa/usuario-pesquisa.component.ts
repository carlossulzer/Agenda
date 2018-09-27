import { IUsuario } from './../../../Models/usuarios.interface';
import { IGrid } from './../../../Models/gridpersonc.interface';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { GridPersoncComponent } from './../../Common/grid-personc/grid-personc.component';


@Component({
  selector: 'app-usuario-pesquisa',
  templateUrl: './usuario-pesquisa.component.html',
  styleUrls: ['./usuario-pesquisa.component.css']
})


export class UsuarioPesquisaComponent extends GridPersoncComponent<IUsuario> {
   url = environment.apiUrl+'/usuarios/grid';

   constructor(http: HttpClient, public router: Router)  {
       
      super(http, router);

      this.titulo = "Usuários";

      this.newRoute = '/usuario-cadastro';

      this.cols = [
        { field: 'usuarioId', header: 'Código', width: '15%' },
        { field: 'nome', header: 'Nome do Usuário', width : '80%' }
      ];

      
      this.getData(http, environment.apiUrl+'/usuarios/todos');

  }
}



