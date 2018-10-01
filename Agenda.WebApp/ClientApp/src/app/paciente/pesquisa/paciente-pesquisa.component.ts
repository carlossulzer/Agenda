import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { IPaciente } from './../../../Models/pacientes.interface';
import { environment } from './../../../environments/environment';
import { GridPersoncComponent } from './../../Common/grid-personc/grid-personc.component';


// video marcoratti
//https://www.youtube.com/watch?v=SKY-26MMBak

@Component({
  selector: 'app-paciente-pesquisa',
  templateUrl:  './../../Common/grid-personc/grid-personc.component.html', // './paciente-pesquisa.component.html',
  styleUrls: ['./paciente-pesquisa.component.css']
})


export class PacientePesquisaComponent extends GridPersoncComponent  <IPaciente> {
  url = environment.apiUrl+'/pacientes/grid';
  titulo = "Pacientes";
  newRoute = '/pacientes/cadastro';
  tableKey =  'pacienteId';

  cols = [
    { field: 'pacienteId', header: 'Código', width: '15%' },
    { field: 'nomePaciente', header: 'Nome do Paciente', width : '60%' },
    { field: 'telefone', header: 'Telefone', width : '20' }
  ]; 

  constructor(http: HttpClient, public router: Router)  {
       super(http, router); 

  }

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

 

}
