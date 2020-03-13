import { Directive, Input } from '@angular/core';

@Directive({
    host: {
        '(input)': 'onInput($event.target)'
    },
    selector: 'ion-input[masked]'
})
export class FieldMask {

    @Input('masked')
    type: string = '';

    @Input() casasDecimais: number = 2;

    public onInput(element: any) {
        if (this.type.toLocaleLowerCase() === 'phone') {
            element.value = this.formatarTelefone(element.value);
        } else if (this.type.toLocaleLowerCase() === 'cpf') {
            element.value = this.formatarCpf(element.value);
        } else if (this.type.toLocaleLowerCase() === 'cns') {
            element.value = this.formatarCns(element.value);
        } else if (this.type.toLocaleLowerCase() === 'cnscpf') {
            element.value = this.formatarCpfCns(element.value);
        } else if (this.type.toLocaleLowerCase() === 'numero') {
            element.value = this.formatarNumero(element.value);
        } else if (this.type.toLocaleLowerCase() === 'altura') {
            element.value = this.formatarAltura(element.value);
        } else if (this.type.toLocaleLowerCase() === 'sonumero') {
            element.value = this.formatarSoNumero(element.value);
        } else if (this.type.toLocaleLowerCase() === 'rgct') {
            element.value = this.formatarRgct(element.value);
        }

        let posicao = element.value.length;
        if (element.createTextRange) {
            var range = element.createTextRange();
            range.move('character', posicao);
            range.select();
        } else if (element.selectionStart) {
            element.focus();
            setTimeout(() => element.setSelectionRange(posicao, posicao), 10);
        } else {
            element.focus();
        }
    }

    private formatarRgct(value) {
        if (!value || value.length < 5) {
            return value;
        }
        value = value.replace(/\D/g, '');
        value = value.substr(0, value.length-4) + '-' + value.substr(value.length-4);
        return value;
    }

    private formatarTelefone(value) {
        if (!value) {
            return value;
        }
        value = value.replace(/\D/g, '');
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
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

    private formatarCns(value) {
        if (!value) {
            return value;
        }
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{4})(\d)/, '$1.$2');
        value = value.replace(/(\d{4})(\d)/, '$1.$2');
        value = value.replace(/(\d{4})(\d)/, '$1.$2');
        return value;
    }

    private formatarNumero(value) {
        if (!value) {
            return value;
        }

        value = value.replace(/\D/g, '');

        if (!value) {
            return '';
        }

        if (value.length - this.casasDecimais > 0) {
            value = value.substring(0, value.length - this.casasDecimais) + ',' + value.substring(value.length - this.casasDecimais);
        }

        return value;
    }

    private formatarAltura(value) {
        if (!value) {
            return value;
        }

        value = value.replace(/\D/g, '');

        if (!value) {
            return '';
        }

        if (value.length > 1) {
            value = value.substring(0, 1) + ',' + value.substring(1);
        }

        return value;
    }

    private formatarSoNumero(value) {
        if (!value) {
            return value;
        }

        value = value.replace(/\D/g, '');

        return value;
    }

}
