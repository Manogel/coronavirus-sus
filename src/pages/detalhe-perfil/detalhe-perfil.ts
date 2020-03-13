import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-detalhe-perfil',
  templateUrl: 'detalhe-perfil.html',
})
export class DetalhePerfilPage {

  public usuario: any;
  public informacoesUsuario: Array<string> = [];

  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams
  ) {}

  ionViewDidEnter() {
    this.usuario = this.navParams.get('usuario');
    delete this.usuario['senha'];
    delete this.usuario['fotografia'];
    delete this.usuario['foto'];
    this.usuario['dataNascimento'] = this.usuario['dataNascimento'] ? moment(this.usuario['dataNascimento']).format('DD/mm/YYYY'): null;
    Object.keys(this.usuario).forEach((atributo) => {
      if(this.usuario[atributo]) {
        this.informacoesUsuario.push(atributo);
      }
    });
    this.usuario.cnsCartao = this.formatarCpfCns(this.usuario.cnsCartao);
    this.usuario.cpf = this.formatarCpfCns(this.usuario.cpf);
  }

  back() {
    this.viewCtrl.dismiss();
  }

  private formatarCpfCns(value) {
    if (!value) {
      return value;
    }
    if (value.replace(/\D/g, '').length <= 11) {
      return this.formatarCpf(value);
    }
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{4})(\d)/, '$1.$2');
    value = value.replace(/(\d{4})(\d)/, '$1.$2');
    return value;
  }

  private formatarCpf(value) {
    if (!value) {
      return value;
    }
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1-$2');

    return value;
  }

  getNomeAtributo(key: string) {
    switch ( key ) {
      case 'nome': return 'Nome';
      case 'cnsCartao': return 'CNS';
      case 'fotografia': return 'Foto';
      case 'email': return 'E-mail';
      case 'cpf': return 'CPF';
      case 'dataNascimento': return 'Data de Nascimento';
      case 'doadorOrgao': return 'Doador de Orgão';
      case 'altura': return 'Altura';
      case 'imc': return 'IMC';
      case 'peso': return 'Peso';
      case 'tipoSanguineo': return 'Tipo Sanguíneo';
      case 'enderecoBairro': return 'Bairro';
      case 'enderecoCep': return 'CEP';
      case 'enderecoLogradouro': return 'Logradouro';
      case 'enderecoNumero': return 'Número';
      case 'sexoDescricao': return 'Sexo';
      case 'racaCorDescricao': return 'Cor';
      case 'paisResidenciaDescricao': return 'País';
      case 'nomePai': return 'Nome do pai';
      case 'nomeMae': return 'Nome da mãe';
      case 'nacionalidade': return 'Nacionalidade';
      case 'enderecoMunicipio': return 'Municipio';
      case 'telefone': return 'Telefone';
    }
  }

}
