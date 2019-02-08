import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './cmail-form-group.component.html',
  styleUrls: ['./cmail-form-group.component.css']
})
export class CmailFormGroupComponent implements OnInit {

  elemento: ElementRef;
  valorDaLabel: string;

  // injecao de dependecia do angular
  constructor(elemento: ElementRef) {
    // console.log('constructor');
    this.elemento = elemento;
   }

   // roda depois que o elemento foi criado na tela
  ngOnInit() {
    const elementoInput = this.elemento.nativeElement.querySelector('input');

    // recupera o valor passado pela label para injetar no html pelo one way data binding
    this.valorDaLabel = elementoInput.getAttribute('placeholder');
    elementoInput.setAttribute('placeholder', ' ');// tem que remover pois ele fica no campo input
  }

}
