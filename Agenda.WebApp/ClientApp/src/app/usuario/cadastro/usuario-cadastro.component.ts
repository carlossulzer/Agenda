import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Routes  } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { UsuarioService } from './../../services/usuario.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  actionMode : any;

  constructor(private fb : FormBuilder, private usuarioService : UsuarioService, private formBuilder : FormBuilder) {

      this.form = fb.group({ 
      "usuarioId" : ["", Validators.required ],
      "nome" : ["", Validators.required ],
      "'email" : ["", Validators.required],
      "senha" : ["", Validators.required]

     })

     

     //this.actionMode = this.usuarioService.actionMode;
 

     //console.log(this.actionMode);


     /*
     if (actionMode == 'New')
        this.titulo = this.titulo + "(inclusão)"
     else if (usuarioService.actionMode === 'Edit')
        this.titulo = this.titulo + "(alteração)"
     else if (this.actionMode === 'Delete')
        this.titulo = this.titulo + "(exclusão)"
*/

   }

  ngOnInit() {
    
  }

  onSubmit(){};


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