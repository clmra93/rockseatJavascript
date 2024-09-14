## Linguagem de programação

Maneira de dar instrução ao computador.
Como um lego, você irá utilizar peças para criar algoritmos, ou seja, para resolver problemas.

> 💡 **Algoritmo**: SequÊncia de passos lógica e finita para resolução de um problema.

## Peças de uma linguagem

- [x] Comentários
- [x] Declaração de variáveis (const, let)
- [x] Operadores (atribuição, concatenação, matemáticos, lógicos)
- [x] Tipos de dados (string, number, boolean)
- [x] Estrutura de dados (functions, object, array)
- [] Controle de fluxo (if/ else)
- [] Estrutura de repetição (for, while)

## Fases da resolução de um problema

[x] Coletar os dados
[x] Processar os dados (manipular, alterar ...)
[x] Apresentar os dados

## Escopos e variáveis:

[x] Variáveis globais e locais
[x] Constantes

## Tipos de dados:

[x] Strings (textos): ""  ''  ``
[x] Number: 2, 1, 4
[x] Function
[x] Boolean: true or false

## Operadores:

[x] Operadores de atribuição de valor
[x] Operador de concatenação

## Estrutura de dados:

### Arrays:

[x] Uma lista com qualquer tipo de dados

### Objetos:

[x] Atributos e métodos
[x] Criação e manipulação de objetos
[x] Acesso a propriedades de objetos

## Aula:

``` js
console.log("Hello World!")

console.log(2)

console.log("Olá Mundo!");

let mensagem = 3
mensagem = 5 //Aqui eu altero o valor da variavel mensagem
console.log(mensagem);

const mensagem_2 = 'teste' //Quando uso const não posso alterar o valor da variável.

{
    const mensagem_2 = 'olá, eu!' // O que es´ta escrito dentro de chaves é considerado local, enquanto o que está fora é considerado global.
    console.log(mensagem_2); // Logo o console só apresentará se for pedido dentro das chaves.
    
}

console.log(mensagem_2); // Aqui apresenta a variável atribuída acima das chaves.

// Arrays, objetos

let metas = ["carol", 'alo'] // O array é definido pelas [] e os itens dentro são as atribuições de valor

console.log(metas[0]); // O número dentro dos [] define o índice do objeto que está sendo chamado. O índice sempre inicia em 0

console.log(metas[1] + ' ' + metas[0]); // alo carol

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

```