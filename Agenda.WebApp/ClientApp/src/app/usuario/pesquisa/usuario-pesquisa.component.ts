import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { GridPersoncComponent } from './../../Common/grid-personc/grid-personc.component';
import { IUsuario } from './../../../Models/usuarios.interface';
import { UsuarioService } from './../../services/usuario.service';


@Component({
  
  selector: 'app-usuario-pesquisa',
  //templateUrl: './../../Common/grid-personc/grid-personc.component.html', 
  templateUrl: './usuario-pesquisa.component.html',
  styleUrls: ['./usuario-pesquisa.component.css'],
})

export class UsuarioPesquisaComponent  {
@ViewChild('GridPersoncComponent') grid: GridPersoncComponent<IUsuario>;

  url = environment.apiUrl+'/usuarios/getall';
  titulo = "Usuários";
  newRoute = '/usuario-cadastro';
  tableKey =  'usuarioId';

  cols = [
    { field: 'usuarioId', header: 'Código', width: '15%' },
    { field: 'nome', header: 'Nome do Usuário', width : '80%' }
  ]; 

  constructor(httpClient: HttpClient, 
       public router: Router, 
       public usuarioService : UsuarioService,
       public gridUsuario : GridPersoncComponent<IUsuario>)  
       {
          super(httpClient, router, usuarioService); 
       }

}



