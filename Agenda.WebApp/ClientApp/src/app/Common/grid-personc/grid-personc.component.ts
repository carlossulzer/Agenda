import { Observable } from 'rxjs/Observable';
import { IUsuario } from './../../../Models/usuarios.interface';
import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { Message} from 'primeng/api'
import { IGrid } from './../../../Models/gridpersonc.interface';

// video marcoratti
//https://www.youtube.com/watch?v=SKY-26MMBak

@Component({
  selector: 'app-grid-personc',
  templateUrl: './grid-personc.component.html',
  styleUrls: ['./grid-personc.component.css']
})

export class GridPersoncComponent<T> {
      titulo : string;
      cols: any[];
      msgs: Message[] = [];
      newRoute : string;
      //dadosAPI: any[] = []; 
      dadosAPI: T[] = []; 
      url : string;

      constructor(http: HttpClient, public router: Router) 
      {
        this.getData(http, this.url);
      }


      getData(http: HttpClient, url : string){
        http.get<T[]>(url).subscribe(result => {
          this.dadosAPI = result;
        }, error => this.showError());
      }

      newRegister()
      {
        //this.router.navigate(['/paciente-cadastro'], pacienteId);
        this.router.navigate([this.newRoute]);
      }

      editRegister(dados : IGrid)
      {
        alert(dados.codigo);
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

