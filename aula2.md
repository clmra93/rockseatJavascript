## Estrutura de repetição:

[x] While

## Condicionais:

[x] switch


```js

function start() { // A function start inicia a aplicação
    console.log('começou') // Aqui eu confiro se a função funcionou, visto que abaixo, quando executo a função irei ter o retorno da mensagem dentro do console.log
}

start() // Aqui eu executo a função

// Outra forma de atribuir a mesma função, usando o arrow function:

const start2 = () => {
    console.log('começou')
}

start2()

function start() {
    let count = 0
    while(count < 10){
        console.log(count)
        count = count + 1
    }
}

start()

function start() {
    while(true){
        let opcao = "sair"
        switch(opcao) {
            case "cadastrar":
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                return
        }
    }
}

start()