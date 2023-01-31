//4)
export class Universidade {
    private _nome: string;
    private _local: string;

    constructor(nome: string, local: string) {
        this._nome = nome;
        this._local = local;
    }

    get nome(){
        return this._nome;
    }

    get local(){
        return this._local;
    }
}

export class Pessoa {
    private _nome: string;
    private _data: string;
    private _universidade: Universidade;

    constructor(nome: string, data: string, universidade: Universidade){
        this._nome = nome;
        this._data = data;
        this._universidade = universidade;
    }

    get data(){
        return this._data;
    }

    get nome(){
        return this._nome;
    }

    get universidade(){
        return this._universidade;
    }

    mostrarDados() {
        console.log(`Nome: ${this.nome} | Data: ${this.data} | Universidade: ${this._universidade.nome} - Local: ${this._universidade.local}`);
    }
}