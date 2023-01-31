import { Normal, Camarote, VIP, ImovelNovo, ImovelVelho, Cachorro, Cavalo, Gato, Universidade, Pessoa } from './classes';


//1)
const ingressoNormal = new Normal();
const ingressoVip = new VIP();
const ingressoCamarote = new Camarote();

ingressoNormal.imprimeValor()
ingressoVip.imprimeValor()
ingressoCamarote.imprimeValor()

//2)
const imovelNovo = new ImovelNovo('Rua José Pedro, 44 - Campo Bom/RS', 45000);
const imovelVelho = new ImovelVelho('Rua José Pedro, 44 - Campo Bom/RS', 35000);

imovelNovo.imprimeValor()
imovelVelho.imprimeDesconto()

//3)
const cachorro = new Cachorro(4, 'caramelo', 15, 'vira-lata')
const cavalo = new Cavalo(4, 'marrom', 400, 'arabe')
const gato = new Gato(4, 'branco', 4, 'persa')

cachorro.latir()
console.log(cachorro.getRaca);
cavalo.galopar()
cavalo.dormir()
gato.caminhar()
console.log(gato.getRaca);

//4)
const universidade = new Universidade('Unisinos', 'Rua Zé Trovao');
const pessoa = new Pessoa('Zeze', '31/02/2012', universidade);

pessoa.mostrarDados();