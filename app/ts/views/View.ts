//declare var $: any;
/*namespace Views{
    export abstract class View<T> {

        //protected _elemento: Element;
        //protected _elemento: any;
        protected _elemento: JQuery;
    
        constructor(seletor: string) {
            //this._elemento = document.querySelector(seletor);
            this._elemento = $(seletor);
        }
    
        update(model: T): void {
            //this._elemento.innerHTML = this.template(model);
            this._elemento.html(this.template(model));
        }
    
        abstract template(model: T): string;
    
    }
}*/

import { logarTempDeExecucao } from '../helpers/decorators/index';
export abstract class View<T> {

    //protected _elemento: Element;
    //protected _elemento: any;
    protected _elemento: JQuery;
    private _escapar: boolean;

    constructor(seletor: string, /*escapar?: boolean*/ escapar: boolean = false) {
        //this._elemento = document.querySelector(seletor);
        this._elemento = $(seletor);
        this._escapar = escapar;    
    }
    //@logarTempDeExecucao(true)
    update(model: T): void {
        let template = this.template(model);
        if(this._escapar){
            template = template.replace(/script[\s\S]*?<\/script>/g,'');
        this._elemento.html(template);
        }
        //this._elemento.innerHTML = this.template(model);
        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;

}