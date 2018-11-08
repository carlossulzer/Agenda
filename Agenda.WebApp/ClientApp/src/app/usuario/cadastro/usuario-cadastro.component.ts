import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Route, Router, ActivatedRoute, Routes } from '@angular/router';
import { IUsuario } from './../../../Models/usuarios.interface';
import { UsuarioService } from './../../services/usuario.service';

import 'rxjs/add/operator/map';
import { Observable, Subscriber, Subscription } from '../../../../node_modules/rxjs';
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
  usuarioResp : IUsuario;

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
    if (this.actionMode == "New")
    {
      this.titulo = "Usuário (inclusão)"
    }
    else if (this.actionMode === "Edit")
    {
      this.titulo = "Usuário (alteração)";
      this.getData(this.idUsuario);
    }
    else if (this.actionMode === "Delete")
    {
      this.titulo = "Usuário (exclusão)";
      this.getData(this.idUsuario);
    }
  }

  getData(id : number){
    this.usuarioService.getData(id).subscribe(
      data => { 
      this.usuarioResp = data;
      this.displayData();
      //console.log(this.usuarioResp);
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
    this.idUsuario = !this.form.controls["usuarioId"].value  ? 0 : +this.form.controls["usuarioId"].value;

    this.usuarioResp.usuarioId = this.idUsuario;
    this.usuarioResp.nome = this.form.controls["nome"].value;
    this.usuarioResp.email = this.form.controls["email"].value;
    this.usuarioResp.senha = this.form.controls["senha"].value;

    this.usuarioService.salvarDados(this.usuarioResp).subscribe(response => {
              this.router.navigate(['/usuario-pesquisa']);
    });
  };

  displayData(){
    this.form.get("usuarioId").setValue(this.usuarioResp.usuarioId);
    this.form.get("nome").setValue(this.usuarioResp.nome);
    this.form.get("email").setValue(this.usuarioResp.email);
    this.form.get("senha").setValue(this.usuarioResp.senha);
  }

  edit(usuarioDados : IUsuario){
    this.usuario = usuarioDados;
  };

  cancel(){
    this.usuario = <IUsuario>{};

    // this.form.get("usuarioId").setValue(0);
    // this.form.get("nome").setValue("");
    // this.form.get("email").setValue("");
    // this.form.get("senha").setValue("");

    this.router.navigate(['/usuario-pesquisa']);
  };

  delete(usuarioDados : IUsuario){
    if (confirm("Deseja excluir o Usuário?")) {
      this.usuarioService.excluirDados(usuarioDados).
       subscribe(response => {
        this.router.navigate(['/usuario-pesquisa']);
      });
    }
  };
  

}

/*
save(usuario: IUsuario){
  var id = string.IsNullOrEmpty(txtCodigo.Text) ? 0 : Convert.ToInt32(txtCodigo.Text);
  
  var contato = _repositorio.ObterPor(id) ?? new Contato();
  
  contato.Nome = txtNome.Text;
  
  if (ValidaContato(contato))
  {
      _repositorio.Salvar(contato);
      CarregaGrid();
      LimpaControles();
  }
}
*/