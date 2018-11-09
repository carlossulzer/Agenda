import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IUsuario } from './../../../Models/usuarios.interface';
import { UsuarioService } from './../../services/usuario.service';

import 'rxjs/add/operator/map';
import { Observable, Subscription } from '../../../../node_modules/rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})

export class UsuarioCadastroComponent implements OnInit {
  formLabel : string;
  isEditMode : boolean;
  form : FormGroup;
  titulo : string;
  actionMode : string;
  action : string;
  usuario : IUsuario = <IUsuario>{};
  idUsuario : number = 0;
  sessionId: Observable<string>;
  inscricao : Subscription;

  constructor(private fb : FormBuilder, public usuarioService : UsuarioService, public router: Router, private route: ActivatedRoute, private http: Http) {
    this.form = fb.group({ 
      usuarioId: new FormControl(''),
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required)
     })

     this.actionMode = this.usuarioService.getItensVisiveis();
     console.log(this.actionMode);
   }

   ngOnInit() {
   this.inscricao = this.route.queryParams.subscribe(params => {                                                    
                                                 this.action = params['action'] || 'New';
                                                 this.idUsuario = params['id'] || 0; 
                                              });
    if (this.action === "New")
    {
      this.titulo = "Usuário (inclusão)"
    }
    else if (this.action === "Edit")
    {
      this.titulo = "Usuário (alteração)";
      this.getData(this.idUsuario);
      this.FormState(true);
    }
    else if (this.action === "Delete")
    {
      this.titulo = "Usuário (exclusão)";
      this.getData(this.idUsuario);
      this.FormState(false);
    }
  }

  getData(id : number){
    this.usuarioService.getData(id).subscribe(
      data => { 
      this.usuario = data;
      this.displayData();
      //console.log(this.usuario);
        },
        (err: HttpErrorResponse) => {
         if (err.error instanceof Error) 
            {
              //A client-side or network error occurred.				 
              console.log('An error occurred:', err.error.message);
            } 
            else 
            {
              //Backend returns unsuccessful response codes such as 404, 500 etc.				 
              console.log('Backend returned status code: ', err.status);
              console.log('Response body:', err.error);
            }
        }		  
    );	   
    
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onSubmit(){
    this.usuario.usuarioId = this.idUsuario;
    this.usuario.nome = this.form.controls["nome"].value;
    this.usuario.email = this.form.controls["email"].value;
    this.usuario.senha = this.form.controls["senha"].value;

    this.usuarioService.salvarDados(this.usuario).subscribe(response => { this.router.navigate(['/usuario-pesquisa']); });
  };

  displayData(){
    this.form.get("usuarioId").setValue(this.usuario.usuarioId); 
    this.form.get("nome").setValue(this.usuario.nome);
    this.form.get("email").setValue(this.usuario.email);
    this.form.get("senha").setValue(this.usuario.senha);
  }

  edit(usuarioDados : IUsuario){
    this.usuario = usuarioDados;
  };

  cancel(){
    this.router.navigate(['/usuario-pesquisa']);
  };

  delete(){
    if (confirm("Deseja excluir o Usuário?")) {
      this.usuarioService.excluirDados(this.usuario).
       subscribe(response => {
        this.router.navigate(['/usuario-pesquisa']);
        error => console.error(error);
        
      });
    }
  };
  
  // Disables/enables each form control based on 'this.formDisabled'
  FormState(state : boolean) {
    Object.keys(this.form.controls).forEach((controlName) => {
        this.form.controls[controlName][(state ? 'enable' : 'disable')](); 
  });
}

}

