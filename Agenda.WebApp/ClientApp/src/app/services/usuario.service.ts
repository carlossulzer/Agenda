import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import { IUsuario } from '../../Models/usuarios.interface';
import { environment } from '../../environments/environment';


@Injectable()
export class UsuarioService {

  eventActionMode = new EventEmitter<string>();
  private actionMode: string = "";
  usuarioResp : IUsuario[] = [];

  constructor(private http : Http) { 
    
  }

  getItensVisiveis() {
    return this.actionMode;
  }
  
  setItensVisiveis(val: string) {
    this.actionMode = val;
    this.eventActionMode.emit(val);
  }

  salvarDados(usuarioDados : IUsuario)
  {
      return this.http.post(environment.apiUrl+"/usuarios/SaveUpdate", usuarioDados);
  }

  excluirDados(usuarioDados : IUsuario)
  {
      return this.http.post(environment.apiUrl+"/usuarios/Delete", usuarioDados);
  }

  getData(codigo : number){
     
    return this.http.get(environment.apiUrl+`/usuarios/GetId/${codigo}`);
   /*
  
  return this.http.get(environment.apiUrl+`/usuarios/GetId/${codigo}`).map(data => <IUsuario[]> data.json());
 
  return this.http.get(environment.apiUrl+`/usuarios/GetId/${codigo}`).subscribe(
        data => this.usuarioResp = data,
        error => alert(error),
        () => console.log(this.usuarioResp)
      );
     
    }
*/

}
