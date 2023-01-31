//1)
abstract class Ingresso {
    protected valorIngresso: number;

    constructor() {
        this.valorIngresso = 20;
    }

    imprimeValor() {
        console.log(`Valor do ingresso: ${this.valorIngresso}`)
    }
}

export class Normal extends Ingresso {}

export class VIP extends Ingresso {
    valorAdicional: number;

    constructor() {
       super();
       this.valorAdicional = 20
    }

    imprimeValor(): void{
        console.log(`Valor ingresso VIP: ${this.valorIngresso + this.valorAdicional}`)
    }

}

export class Camarote extends Ingresso {
    valorAdicional: number;

    constructor() {
        super();
        this.valorAdicional = 50;
    }

    imprimeValor(): void {
        console.log(`Valor do ingresso Camarote: ${this.valorIngresso + this.valorAdicional}`)
    }
}






