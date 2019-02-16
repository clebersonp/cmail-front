import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filtraPorAssunto'
})
export class FiltraPorAssuntoPipe implements PipeTransform {
    transform(emailsDaTela, valorDigitadoDoInput) {
        const listaAtualizada = emailsDaTela.filter((emailAtual) => {
            const valorDigitadoPeloUsuario: string = valorDigitadoDoInput.toLowerCase();
            const assuntoDoEmailAtual: string = emailAtual.assunto.toLowerCase();

            return assuntoDoEmailAtual.includes(valorDigitadoPeloUsuario);
        });

        return listaAtualizada;
    }
}