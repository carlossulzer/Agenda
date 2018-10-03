import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { IUsuario } from '../../Models/usuarios.interface';

@Injectable()
export class UsuarioService {

  actionMode = new EventEmitter<string>();

  constructor(private http : HttpClient) { }


  SalvarDados(usuario : IUsuario)
  {
      return this.http.post("api/usuario", usuario);
      
  }

}
