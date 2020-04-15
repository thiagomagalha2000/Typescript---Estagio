//import { imprimivel } from './imprimivel';
//import { igualavel } from './igualavel';
import { MeuObjeto } from './MeuObjeto';

export class Negociacao implements MeuObjeto<Negociacao> {
    
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {
        //super();
    }

    get volume() {

        return this.quantidade * this.valor;
    }

    paraTexto(): void{
        console.log('Impressao paraTexto() de Negociacão');
        console.log(
            `Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`
        );

    }

    ehIgual(negociacao: Negociacao): boolean {

        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() == negociacao.data.getFullYear();   
    }
}