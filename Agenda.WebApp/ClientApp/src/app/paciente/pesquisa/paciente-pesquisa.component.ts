import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { Message} from 'primeng/api'
import { IPaciente } from './../../../Models/pacientes.interface';
import { environment } from './../../../environments/environment';

// video marcoratti
//https://www.youtube.com/watch?v=SKY-26MMBak

@Component({
  selector: 'app-paciente-pesquisa',
  templateUrl: './paciente-pesquisa.component.html',
  styleUrls: ['./paciente-pesquisa.component.css']
})

export class PacientePesquisaComponent {
      public pacientesAPI: IPaciente[] = [];
      cols: any[];
      msgs: Message[] = [];
      
      constructor(http: HttpClient, private router: Router ) 
      {
          this.cols = [
            { field: 'pacienteId', header: 'Código', width: '15%' },
            { field: 'nomePaciente', header: 'Nome do Paciente', width : '60%' },
            { field: 'telefone', header: 'Telefone', width : '20' }
          ];

          http.get<IPaciente[]>(environment.apiUrl+'/pacientes/grid').subscribe(result => {
              this.pacientesAPI = result;
            }, error => this.showError());
      }

      newRegister( )
      {
        //this.router.navigate(['/paciente-cadastro'], pacienteId);
        this.router.navigate(['/paciente-cadastro']);
      }

      editRegister(paciente : IPaciente)
      {
        alert(paciente.nomePaciente);
      } 

      deleteRegister()
      {

      }

      showError() 
      {
        this.msgs = [];
        this.msgs.push( { severity:'error', summary:'Erro : ', detail: "Erro ao obter os dados (API)"});
      }
}

