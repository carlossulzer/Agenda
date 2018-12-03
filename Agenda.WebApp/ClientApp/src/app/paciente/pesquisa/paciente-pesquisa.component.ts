import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { IPaciente } from './../../../Models/pacientes.interface';
import { environment } from './../../../environments/environment';
import { GridPersoncComponent } from './../../Common/grid-personc/grid-personc.component';


// video marcoratti
//https://www.youtube.com/watch?v=SKY-26MMBak

@Component({
  selector: 'app-paciente-pesquisa',
  templateUrl:  './paciente-pesquisa.component.html',
  styleUrls: ['./paciente-pesquisa.component.css']
})

export class PacientePesquisaComponent {
  @ViewChild(GridPersoncComponent) grid: GridPersoncComponent<IPaciente>;


  ngOnInit(): void {
  this.grid.url = environment.apiUrl+'/pacientes/grid';
  this.grid.titulo = "Pacientes";
  this.grid.newRoute = '/pacientes/cadastro';
  this.grid.tableKey =  'pacienteId';

  this.grid.cols = [
    { field: 'pacienteId', header: 'Código', width: '15%' },
    { field: 'nomePaciente', header: 'Nome do Paciente', width : '60%' },
    { field: 'telefone', header: 'Telefone', width : '20' }
  ]; 
}
  constructor(httpClient: HttpClient, public router: Router)  {
  }

  /*
  newRegister( )
  {
    //this.router.navigate(['/paciente-cadastro'], pacienteId);
    this.router.navigate(['/paciente-cadastro']);
  }

  editRegister() //paciente : IPaciente)
  {
    alert('Edição de Paceinte'); //paciente.nomePaciente);
  } 

  deleteRegister()
  {

  }
*/
 

}
