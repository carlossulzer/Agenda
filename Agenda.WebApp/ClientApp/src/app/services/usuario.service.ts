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

  SalvarDados(usuarioDados : IUsuario)
  {
      return this.http.post("api/usuario/SaveUpdate", usuarioDados);
      
  }

  ExcluirDados(usuarioDados : IUsuario)
  {
      return this.http.post("api/usuario/Delete", usuarioDados);
      
  }

}
