import { Injectable } from '@angular/core';

@Injectable()
export class Usuario {

  public cnsCartao: string;
  public cpf: string;
  public dataNascimento: any;
  public doadorOrgao: boolean;
  public enderecoBairro: string;
  public enderecoCep: string;
  public enderecoLogradouro: string;
  public enderecoMunicipio: string;
  public foto: any;
  public nacionalidade: string;
  public nome: string;
  public nomeMae: string;
  public nomePai: string;
  public paisResidenciaDescricao: string;
  public racaCorDescricao: string;
  public sexoDescricao: string;
  public tipoSanguineo: string;
  public email: string;

  constructor() {}

  set(usuario) {
    if (usuario) {
      this.cnsCartao = usuario.cnsCartao;
      this.cpf = usuario.cpf;
      this.dataNascimento = usuario.dataNascimento;
      this.doadorOrgao = usuario.doadorOrgao;
      this.enderecoBairro = usuario.enderecoBairro;
      this.enderecoCep = usuario.enderecoCep;
      this.enderecoLogradouro = usuario.enderecoLogradouro;
      this.enderecoMunicipio = usuario.enderecoMunicipio;
      this.foto = usuario.foto;
      this.nacionalidade = usuario.nacionalidade;
      this.nome = usuario.nome;
      this.nomeMae = usuario.nomeMae;
      this.nomePai = usuario.nomePai;
      this.paisResidenciaDescricao = usuario.paisResidenciaDescricao;
      this.racaCorDescricao = usuario.racaCorDescricao;
      this.sexoDescricao = usuario.sexoDescricao;
      this.tipoSanguineo = usuario.tipoSanguineo;
      this.email = usuario.email;
    } else {
      this.cnsCartao = null;
      this.cpf = null;
      this.dataNascimento = null;
      this.doadorOrgao = null;
      this.enderecoBairro = null;
      this.enderecoCep = null;
      this.enderecoLogradouro = null;
      this.enderecoMunicipio = null;
      this.foto = null;
      this.nacionalidade = null;
      this.nome = null;
      this.nomeMae = null;
      this.nomePai = null;
      this.paisResidenciaDescricao = null;
      this.racaCorDescricao = null;
      this.sexoDescricao = null;
      this.tipoSanguineo = null;
      this.email = null;
    }
  }
}
