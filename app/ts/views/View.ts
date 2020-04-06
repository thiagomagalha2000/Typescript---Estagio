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