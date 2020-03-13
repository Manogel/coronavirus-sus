export class Util {

    static validaCNS(vlrCNS: string) {
      let soma: number;
      let resto: number;
      let dv: number;
      let pis: string;
      let resultado: string;
      let tamCNS = vlrCNS.length;
      if ((tamCNS) != 15) {
        return false;
      }
      pis = vlrCNS.substring(0,11);
      soma = (((Number(pis.substring(0,1))) * 15) +
      ((Number(pis.substring(1,2))) * 14) +
      ((Number(pis.substring(2,3))) * 13) +
      ((Number(pis.substring(3,4))) * 12) +
      ((Number(pis.substring(4,5))) * 11) +
      ((Number(pis.substring(5,6))) * 10) +
      ((Number(pis.substring(6,7))) * 9) +
      ((Number(pis.substring(7,8))) * 8) +
      ((Number(pis.substring(8,9))) * 7) +
      ((Number(pis.substring(9,10))) * 6) +
      ((Number(pis.substring(10,11))) * 5));
      resto = soma % 11;
      dv = 11 - resto;
      if (dv == 11) {
        dv = 0;
      }
      if (dv == 10) {
        soma = (((Number(pis.substring(0,1))) * 15) +
        ((Number(pis.substring(1,2))) * 14) +
        ((Number(pis.substring(2,3))) * 13) +
        ((Number(pis.substring(3,4))) * 12) +
        ((Number(pis.substring(4,5))) * 11) +
        ((Number(pis.substring(5,6))) * 10) +
        ((Number(pis.substring(6,7))) * 9) +
        ((Number(pis.substring(7,8))) * 8) +
        ((Number(pis.substring(8,9))) * 7) +
        ((Number(pis.substring(9,10))) * 6) +
        ((Number(pis.substring(10,11))) * 5) + 2);
        resto = soma % 11;
        dv = 11 - resto;
        resultado = pis + '001' + String(dv);
      } else {
        resultado = pis + '000' + String(dv);
      }
      if (vlrCNS != resultado) {
        return false;
      } else {
        return true;
      }
    }


  static validaCNS_PROV(vlrCNS: string) {
    let pis;
    let resto;
    let soma;

    pis = vlrCNS.substring(0,15);

    if (pis == '') {
      return false
    }

    if ((vlrCNS.substring(0,1) != '7')  && (vlrCNS.substring(0,1) != '8') && (vlrCNS.substring(0,1) != '9')) {
      return false;
    }

    soma = (   (parseInt(pis.substring( 0, 1),10)) * 15)
      + ((parseInt(pis.substring( 1, 2),10)) * 14)
      + ((parseInt(pis.substring( 2, 3),10)) * 13)
      + ((parseInt(pis.substring( 3, 4),10)) * 12)
      + ((parseInt(pis.substring( 4, 5),10)) * 11)
      + ((parseInt(pis.substring( 5, 6),10)) * 10)
      + ((parseInt(pis.substring( 6, 7),10)) * 9)
      + ((parseInt(pis.substring( 7, 8),10)) * 8)
      + ((parseInt(pis.substring( 8, 9),10)) * 7)
      + ((parseInt(pis.substring( 9,10),10)) * 6)
      + ((parseInt(pis.substring(10,11),10)) * 5)
      + ((parseInt(pis.substring(11,12),10)) * 4)
      + ((parseInt(pis.substring(12,13),10)) * 3)
      + ((parseInt(pis.substring(13,14),10)) * 2)
      + ((parseInt(pis.substring(14,15),10)) * 1);

    resto = soma % 11;

    if (resto == 0) {
      return true;
    }
    else {
      return false;
    }
  }

  static validarCPF(strCPF: string) {
    let soma = 0;
    let resto;

    if (strCPF == "00000000000") return false;

    for (var i=1; i<=9; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(strCPF.substring(9, 10)) ) return false;

    soma = 0;

    for (let i = 1; i <= 10; i++) soma = soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
  }

  static validarSenha(senha: string) {
    return senha.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/g) !== null;
  }

  static getDistancia(latitudeOrigem, longitudeOrigem, latitude, longitude) {
    if (latitudeOrigem != null && longitudeOrigem != null && latitude != null && longitude) {
      return this.getDistanceFromLatLonInKm(latitudeOrigem, longitudeOrigem, latitude, longitude).toFixed(0) + ' km';
    }
    return '';
  }

  static getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  static deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

}
