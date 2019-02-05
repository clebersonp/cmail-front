import { Component } from "@angular/core";

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

    toggleMenu() {
        // alert('Testando o click do botao com One Way data binding');
        this.ativaMenu = !this.ativaMenu;
    }

    get isMenuOpen() {
        return this.ativaMenu;
    }
}