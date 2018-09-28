import { Observable } from 'rxjs/Observable';
import { IUsuario } from './../../../Models/usuarios.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { Message} from 'primeng/api'

// video marcoratti
//https://www.youtube.com/watch?v=SKY-26MMBak

@Component({
  selector: 'app-grid-personc',
  templateUrl: './grid-personc.component.html',
  styleUrls: ['./grid-personc.component.css']
})

export class GridPersoncComponent<T> implements OnInit {
      public titulo : string;
      cols: any[];
      msgs: Message[] = [];
      newRoute : string;
      //dadosAPI: any[] = []; 
      dadosAPI: T[] = []; 
      url : string;

      constructor(public http : HttpClient, public router: Router) 
      {
       
      }

      ngOnInit(){
         this.getData(this.http, this.url);
      }


      getData(http: HttpClient, urlApi : string){
        http.get<T[]>(urlApi).subscribe(result => {
          this.dadosAPI = result;
        }, error => this.showError());
      }

      newRegister()
      {
        //this.router.navigate(['/paciente-cadastro'], pacienteId);
        this.router.navigate([this.newRoute]);
      }

      editRegister()
      {
        //alert(dados.codigo);
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

