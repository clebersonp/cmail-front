import { Component, Input } from "@angular/core";
import { HeaderDataService } from './header-data.service';

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css',
        './header-search.css'
    ]
})
export class HeaderComponent {

    tituloHeader = "Acessando o TS com one way databinding";
    private ativaMenu = false;
    @Input() tituloDaPagina; // acessando o valor do campo do inbox.component.html por causa do selector <cmail-header>

    constructor(private headerDataService: HeaderDataService) {}

    toggleMenu() {
        // alert('Testando o click do botao com One Way data binding');
        this.ativaMenu = !this.ativaMenu;
    }

    get isMenuOpen() {
        return this.ativaMenu;
    }

    handleInputSearch(dadoAtualDoCampoDeBusca: string) {
        // BroadCas de dados via servico
        this.headerDataService.updateHeaderSearchValue(dadoAtualDoCampoDeBusca);        
    }
}