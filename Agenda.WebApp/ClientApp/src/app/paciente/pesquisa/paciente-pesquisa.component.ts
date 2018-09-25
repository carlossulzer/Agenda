import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-paciente-pesquisa',
  templateUrl: './paciente-pesquisa.component.html',
  styleUrls: ['./paciente-pesquisa.component.css']
})

export class PacientePesquisaComponent {
    public forepacientes: IPacienteForecast[] = [];
    cols: any[];



    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {


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

    http.get<IPacienteForecast[]>('https://localhost:6001/api/pacientes/grid', httpOptions).subscribe(result => {
      this.forepacientes = result;
    }, error =>alert(error), 
    ()=> console.log(this.forepacientes));


    
  }

   
}

interface IPacienteForecast {
  pacienteId: number;
  nomePaciente: string;
  telefone: string;
}

