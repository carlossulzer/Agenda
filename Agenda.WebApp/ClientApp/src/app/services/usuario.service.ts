
import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import { IUsuario } from '../../Models/usuarios.interface';
import { environment } from '../../environments/environment';

@Injectable()
export class UsuarioService {

  eventActionMode = new EventEmitter<string>();
  private actionMode: string = "";
  usuario : IUsuario = <IUsuario>{};

  constructor(private http : HttpClient) { }

  getItensVisiveis() {
    return this.actionMode;
  }
  
  setItensVisiveis(val: string) {
    this.actionMode = val;
    this.eventActionMode.emit(val);
  }

  salvarDados(usuarioDados : IUsuario){
      return this.http.post(environment.apiUrl+"/usuarios/SaveUpdate", usuarioDados);
  }

  excluirDados(usuarioDados : IUsuario){
      return this.http.post(environment.apiUrl+"/usuarios/Delete", usuarioDados);
  }

  getData(codigo : number) : Observable<IUsuario>{
      return this.http.get<IUsuario>(environment.apiUrl+`/usuarios/GetId/${codigo}`, {responseType: 'json'});
  };

}
