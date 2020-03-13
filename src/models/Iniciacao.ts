export class Iniciacao {
  token: string;
  existeDNI: boolean;
  existeCNS: boolean;

  constructor(iniciacao: any) {
    this.token = iniciacao.token;
    this.existeDNI = iniciacao.existeDNI;
    this.existeCNS = iniciacao.existeCNS;
  }
}
