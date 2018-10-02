import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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