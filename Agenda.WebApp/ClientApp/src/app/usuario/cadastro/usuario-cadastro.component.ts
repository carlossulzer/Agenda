import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { IUsuario } from './../../../Models/usuarios.interface';
import { UsuarioService } from './../../services/usuario.service';

import 'rxjs/add/operator/map';

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
  usuario : IUsuario = <IUsuario>{};
  idUsuario : number;

  constructor(private fb : FormBuilder, public usuarioService : UsuarioService, public router: Router) {

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
    if (this.actionMode == "New")
      this.titulo = "Usuário (inclusão)"
   else if (this.actionMode === "Edit")
      this.titulo = "Usuário (alteração)"
   else if (this.actionMode === "Delete")
      this.titulo = "Usuário (exclusão)"
  }

  onSubmit(){
    this.idUsuario =   !this.form.controls["usuarioId"].value  ? 0 : +this.form.controls["usuarioId"].value;

    this.usuario.usuarioId = this.idUsuario;
    this.usuario.nome = this.form.controls["nome"].value;
    this.usuario.email = this.form.controls["email"].value;
    this.usuario.senha = this.form.controls["senha"].value;

    this.usuarioService.SalvarDados(this.usuario).subscribe(response => {
              this.router.navigate(['/usuario-pesquisa']);
    });
  };

  loadData(){
    this.form.get("usuarioId").setValue(this.usuario.usuarioId);
    this.form.get("nome").setValue(this.usuario.nome);
    this.form.get("email").setValue(this.usuario.email);
    this.form.get("senha").setValue(this.usuario.senha);
  }

  edit(usuarioDados : IUsuario){
    this.usuario = usuarioDados;
    this.loadData();
  };

  cancel(){
    this.usuario = <IUsuario>{};
    this.loadData();

    // this.form.get("usuarioId").setValue(0);
    // this.form.get("nome").setValue("");
    // this.form.get("email").setValue("");
    // this.form.get("senha").setValue("");

    this.router.navigate(['/usuario-pesquisa']);
  };

  delete(usuarioDados : IUsuario){
    this.loadData();
    if (confirm("Deseja excluir o Usuário?")) {
      this.usuarioService.ExcluirDados(usuarioDados).
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