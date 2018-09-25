import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


//import { Http } from '@angular/http';


@Component({
  selector: 'app-usuario-pesquisa',
  templateUrl: './usuario-pesquisa.component.html',
  styleUrls: ['./usuario-pesquisa.component.css']
})


export class UsuarioPesquisaComponent {

   public foreusuarios: IUsuarioForecast[] = [];



   constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
        })
    };

    http.get<IUsuarioForecast[]>('https://localhost:6001/api/usuarios/todos', httpOptions).subscribe(result => {
      this.foreusuarios = result;
    }, error =>alert(error), 
    ()=> console.log(this.foreusuarios)); //  console.error(error));
    
  }
}

interface IUsuarioForecast {
  usuarioId: number;
  nome: string;
}


