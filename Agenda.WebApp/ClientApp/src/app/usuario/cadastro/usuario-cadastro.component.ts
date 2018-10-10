import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router, ActivatedRoute, Routes } from '@angular/router';
import { IUsuario } from './../../../Models/usuarios.interface';
import { UsuarioService } from './../../services/usuario.service';

import 'rxjs/add/operator/map';
import { Observable, Subscriber, Subscription } from '../../../../node_modules/rxjs';

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

  constructor(private fb : FormBuilder, public usuarioService : UsuarioService, public router: Router, private route: ActivatedRoute) {

    this.form = fb.group({ 
      "usuarioId" : [""],
      "nome" : ["", Validators.required ],
      "email" : ["", Validators.required],
      "senha" : ["", Validators.required]
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
    //this.usuario = this.usuarioService.getData(this.idUsuario);
    //this.displayData();
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onSubmit(){
    this.idUsuario =   !this.form.controls["usuarioId"].value  ? 0 : +this.form.controls["usuarioId"].value;

    this.usuario.usuarioId = this.idUsuario;
    this.usuario.nome = this.form.controls["nome"].value;
    this.usuario.email = this.form.controls["email"].value;
    this.usuario.senha = this.form.controls["senha"].value;

    this.usuarioService.salvarDados(this.usuario).subscribe(response => {
              this.router.navigate(['/usuario-pesquisa']);
    });
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