import { Negociacao, imprimivel } from "../models/index";

//export function imprime(...negociacoes: Negociacao[]){
//export function imprime(...objetos: any[]){
export function imprime(...objetos: imprimivel[]){

    objetos.forEach(objeto => objeto.paraTexto());
}