import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[cmailInput]'
})
export class CmailFormInpuDirective {

    constructor(elementoHtml: ElementRef) {
        // Injecao de dependencia (nao sei criar. o angular cria p nos)
        console.log("Diretiva sendo chamada!");
        const elemento = elementoHtml.nativeElement;
        elemento.id = elemento.getAttribute('placeholder').replace(/\a/, '').toLowerCase();
        elemento.classList.add('mdl-textfield__input');
    }
}