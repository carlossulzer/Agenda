import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Message} from 'primeng/api'
import { IPaciente } from './../../../Models/pacientes.interface';

// video marcoratti
//https://www.youtube.com/watch?v=SKY-26MMBak

@Component({
  selector: 'app-paciente-pesquisa',
  templateUrl: './paciente-pesquisa.component.html',
  styleUrls: ['./paciente-pesquisa.component.css']
})

export class PacientePesquisaComponent {
      public forepacientes: IPaciente[] = [];
      cols: any[];
      msgs: Message[] = [];
      
      constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string ) {

      const httpOptions = {
        headers: new HttpHeaders({ 
          'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json'
          })
      };

      this.cols = [
        { field: 'pacienteId', header: 'Código', width: '15%' },
        { field: 'nomePaciente', header: 'Nome do Paciente', width : '60%' },
        { field: 'telefone', header: 'Telefone', width : '20' }
      ];

      http.get<IPaciente[]>('https://localhost:6001/api/pacientes/grid', httpOptions).
      subscribe(result => { 
                              this.forepacientes = result;
                          }, error =>this.showError(), ()=> console.log(this.forepacientes));
    }

    New(@Inject('BASE_URL') baseUrl: string){
      //var url = '/movimentacaoCadastralBeneficiarioPessoa?idbeneficiario=' + this.model.id + '&apenasFamilia=true';
      //this.$location.url(url);
    }

    Edit(paciente : IPaciente){
      alert(paciente.nomePaciente);
    } 

    showError() {
      this.msgs = [];
      this.msgs.push( { severity:'error', summary:'Erro : ', detail: "Erro ao obter os dados (API)"});
  }
}

