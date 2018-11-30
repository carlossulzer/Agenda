import { Component, OnInit, Injectable, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { Message} from 'primeng/api'
import { UsuarioService } from './../../services/usuario.service';

// video marcoratti
//https://www.youtube.com/watch?v=SKY-26MMBak
//https://www.youtube.com/watch?v=ube-_pZRlV4 - task


@Component({
  selector: 'app-grid-personc',
  templateUrl: './grid-personc.component.html',
  styleUrls: ['./grid-personc.component.css']
})

export class GridPersoncComponent<T> implements OnInit {
@Input() model: any;

      titulo : string = "";
      cols: any[] = null;
      msgs: Message[] = null;
      newRoute : string = "";
      dadosAPI: T[] = null; 
      url : string = "";
      tableKey : string = "";
      
      constructor(public httpClient : HttpClient, public router: Router, public usuarioService : UsuarioService) {
      }

      ngOnInit(){
         this.getData();
      }

      getData(){
          this.httpClient.get<T[]>(this.url).subscribe(result => {
          this.dadosAPI = result;
          console.log(this.dadosAPI);

        }, error => {
           console.log(error);
           this.showError();
          }
           );
      }

      newRegister(){
        //this.router.navigate(['/paciente-cadastro'], pacienteId);
        this.usuarioService.setItensVisiveis("New");

        this.router.navigate([this.newRoute], { queryParams: { action : 'New', id: 0 } });


      }

      editRegister(dados : T[]){
        this.usuarioService.setItensVisiveis("Edit");
        this.router.navigate([this.newRoute], { queryParams: { action : 'Edit', id: dados[this.tableKey] } });
      } 
 
      deleteRegister(dados : T[]){
        this.usuarioService.setItensVisiveis("Delete");
        this.router.navigate([this.newRoute], { queryParams: { action : 'Delete', id: dados[this.tableKey] } });
      }

      showError(){
        this.msgs = [];
        this.msgs.push( { severity:'error', summary:'Erro : ', detail: "Erro ao obter os dados (API)"});
      }
}

