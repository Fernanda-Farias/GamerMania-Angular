import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  senha: string = '';
  mensagemErro: string = '';

  login(): void {

    if (!this.usuario || !this.senha) {
      this.mensagemErro = 'Preencha os campos para efetuar o login';
      return;
    }

    if (this.usuario === 'Fernanda' && this.senha === '123') {
      alert('Login feito com sucesso!');
      window.location.href = 'index.html';
    } else {
      this.mensagemErro = 'Usuário ou senha incorretos.';
    }
  }
}
