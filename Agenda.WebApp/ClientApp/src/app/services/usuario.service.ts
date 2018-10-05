import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { IUsuario } from '../../Models/usuarios.interface';

@Injectable()
export class UsuarioService {

  eventActionMode = new EventEmitter<string>();
  private actionMode: string = "";


  constructor(private http : HttpClient) { 
    
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
      return this.http.post("api/usuario/SaveUpdate", usuarioDados);
      
  }

  excluirDados(usuarioDados : IUsuario)
  {
      return this.http.post("api/usuario/Delete", usuarioDados);
      
  }

  getData(id : number){
    return this.http.post("api/usuario/GetId", id);
  }
}
