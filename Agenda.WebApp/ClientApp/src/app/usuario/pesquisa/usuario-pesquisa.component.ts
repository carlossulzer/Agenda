import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
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

export class UsuarioPesquisaComponent  {
@ViewChild(GridPersoncComponent) grid: GridPersoncComponent<IUsuario>;

ngOnInit(): void {
  this.grid.url = environment.apiUrl+'/usuarios/getall';
  this.grid.titulo = "Usuários";
  this.grid.newRoute = '/usuario-cadastro';
  this.grid.tableKey =  'usuarioId';

  this.grid.cols = [
    { field: 'usuarioId', header: 'Código', width: '15%' },
    { field: 'nome', header: 'Nome do Usuário', width : '80%' }
  ]; 
}

constructor(httpClient: HttpClient, 
       public router: Router){
       }

}



