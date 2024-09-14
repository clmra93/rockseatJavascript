
let meta = {
    value: 'ler um livro por mês',
    checked: false,
    log: (info) => {
        console.log(info)
    }
}

console.log(meta.value);
meta.value = 'não é mais ler um livro'
meta.log(meta.value)

// o método quando fora da função, ele vem entre {}
// o uso do '.' serve para acessar uma propriedade dentro do objeto.

// function
// o sinal => é uma arrow function, que nesse caso está sendo atribuida a constante criarMeta.
const criarMeta = () => {

}

// Criando a função e chamando de criarMeta
function criarMeta2() {

}

// Ambas as formas funcionam. Importante se atentar que não pode criar duas vezes a mesma função. Devem ter nomes diferentes.

let metas = [
    meta,
    {
        value: 'caminhar 20 minutos por dia',
        checked: false
    }
]

console.log(metas[1].value)
// Aqui eu acesso o objeto meta, dentro da variavel metas, e acesso o valor value dentro desse objeto. Que retornará caminhar 20 minutos por dia.

console.log(metas[0].value)
// Aqui acessa o primeiro objeto meta definido, que retornará não é mais ler um livro.
