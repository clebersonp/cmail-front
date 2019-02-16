import { EventEmitter, Injectable } from '@angular/core';

// prover para todos que quiserem usar
@Injectable({
    providedIn: 'root'
})
export class HeaderDataService {

    // Criando um emissor de eventos, passando valor string, valor que sera digitado no input de search de emails
    // Mesma ideia de mensageria ou Publisher e Subscriber
    mudancasNoValorDaBusca: EventEmitter<string> = new EventEmitter();

    constructor() {}

    // O cara que irá imitir o valor para quem tiver inscrito ao evento
    updateHeaderSearchValue(valorAtualDaBusca) {
        console.log('Log.! ', this.mudancasNoValorDaBusca);
        this.mudancasNoValorDaBusca.emit(valorAtualDaBusca); // 
    }

    listenHeaderSearchChanger() {
        return this.mudancasNoValorDaBusca; // retorna o evento para quem quiser se inscrever
    }

}