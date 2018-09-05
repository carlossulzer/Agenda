import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-usuario-pesquisa',
  templateUrl: './usuario-pesquisa.component.html',
  styleUrls: ['./usuario-pesquisa.component.css']
})
export class UsuarioPesquisaComponent {

   public foreusuarios: UsuarioForecast[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<UsuarioForecast[]>('https://localhost:6001/api/usuarios/todos').subscribe(result => {
      this.foreusuarios = result;
    }, error => console.error(error));
  }

}

//https://medium.com/@gigioSouza/resolvendo-o-problema-do-cors-com-angular-2-e-o-angular-cli-7f7cb7aab3c2

// "start": "ng serve --extract-css",     package.json
//"start": "ng serve --proxy-config proxy.config.js",


interface UsuarioForecast {
  usuarioId: number;
  nome: string;
}


