import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { Message} from 'primeng/api'
import { environment } from '../../../environments/environment';

// video marcoratti
//https://www.youtube.com/watch?v=SKY-26MMBak

@Component({
  selector: 'app-grid-personc',
  templateUrl: './grid-personc.component.html',
  styleUrls: ['./grid-personc.component.css']
})

export class GridPersoncComponent<T> implements OnInit {
      titulo : string;
      cols: any[];
      msgs: Message[] = [];
      newRoute : string;
      dadosAPI: T[] = []; 
      url : string;

      constructor(public http : HttpClient, public router: Router) {
      }

      ngOnInit(){
         this.getData();
      }

      getData(){
        //this.url = environment.apiUrl+'/usuarios/todos'
        this.http.get<T[]>(this.url).subscribe(result => {
          this.dadosAPI = result;
        }, error => this.showError());
      }

      newRegister(){
        //this.router.navigate(['/paciente-cadastro'], pacienteId);
        this.router.navigate([this.newRoute]);
      }

      editRegister(){
        //alert(dados.codigo);
      } 

      deleteRegister(){
      }

      showError(){
        this.msgs = [];
        this.msgs.push( { severity:'error', summary:'Erro : ', detail: "Erro ao obter os dados (API)"});
      }
}

