//import { NegociacoesView } from '../views/NegociacoesView';
//import { MensagemView } from '../views/MensagemView';
//import { Negociacoes } from '../models/Negociacoes';
//import { Negociacao } from '../models/Negociacao';
import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';
import { logarTempDeExecucao } from '../helpers/decorators/index';
import { domInject } from '../helpers/decorators/index';

export class NegociacaoController {

    /*
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    */

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    //private _negociacoesView = new Views.NegociacoesView('#negociacoesView');
    //private _mensagemView = new Views.MensagemView('#mensagemView');
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    //private _negociacoesView = new NegociacoesView('#negociacoesView', true);
    //private _mensagemView = new MensagemView('#mensagemView', true);

    constructor() {
        /*this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        */
        // atualiza a view para exibir os dados do modelo, vazio
        this._negociacoesView.update(this._negociacoes);
    }

    //@logarTempDeExecucao()
    adiciona(event: Event) {

        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if(!this._ehDiaUtil(data)) {

            this._mensagemView.update('Somente negociações em dias úteis, por favor!');
            return 
        }
    
 
        const negociacao = new Negociacao(
            /*
            new Date(this._inputData.value.replace(/-/g, ',')), 
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
            */
            //new Date(this._inputData.val().replace(/-/g, ',')),
            data, 
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        /*
        this._negociacoes.paraArray().forEach(negociacao =>{
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);
        })*/

        this._negociacoes.adiciona(negociacao);

        // depois de adicionar, atualiza a view novamente para refletir os dados
        this._negociacoesView.update(this._negociacoes);
        //this._mensagemView.update('Negociação adicionada com sucesso!');
    }
    private _ehDiaUtil(data:Date){
        //this._mensagemView.update(data.getDay().toString());
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() !=DiaDaSemana.Domingo;
    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca, 
    Quarta,
    Quinta,
    Sexta,
    Sabado,
}