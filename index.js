const { select, input, checkbox } = require('@inquirer/prompts')

let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({message: "Digite a meta: "})

    if(meta.length == 0) {
        console.log("A meta não pode ser vazia.")
        return
    }

    metas.push(
        { value: meta, checked: false}
    )
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar, e o enter para finalizar essa etapa!",
        choices: [...metas],
        instructions: false
    })

    metas.forEach((meta) => {
        meta.checked = false
    })

    if(respostas.length == 0) {
        console.log('Nenhuma meta selecionada')
    }

    respostas.forEach((resposta) => {
        const meta = metas.find((meta) => {
            return meta.value == resposta
        })

        meta.checked = true
    })

    console.log('Meta(s) concluída(s)');
    
}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if(realizadas.length == 0) {
        console.log('Não existem metas realizadas!')
        return
    }

    await select({
        message: "Metas realizadas!",
        choices: [...realizadas]
    })
}

const metasAbertas = async () => {
    const abertas = metas.filter((meta) => {
        return !meta.checked // A ! inverte o valor do booleano
    })

    if(abertas.length == 0){
        console.log('Não existem metas abertas!')
        return
    }

    await select({
        message: "Metas abertas!" + realizadas.length,
        choices: [...abertas]
    })
}

const deletarMetas = async () => {
    const metasDesmarcadas = metas.map((meta) => {
        return {value: meta.value, checked: false}
    })

    const deletar = await checkbox({
        message: "Selecione o item para deletar!",
        choices: [...metasDesmarcadas],
        instructions: false
    })

    if(deletar.length == 0) {
        console.log("Nenhum item para deletar!");
        return
    }

    deletar.forEach((deletar) => {
        metas.filter((meta) => {
            return meta.value != deletar
        })
    })

    console.log("Meta(s) deletada(s) com sucesso!")
}

const start = async () => {

    while(true){

        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Metas realizadas",
                    value: "realizadas"
                },
                {
                    name: "Metas abertas",
                    value: "abertas"
                },
                {
                    name: "Deletar metas",
                    value: "deletar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch(opcao) {
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas);
                break
            case "listar":
                await listarMetas()
                break
            case "realizadas":
                await metasRealizadas()
                break
            case "abertas":
                await metasAbertas()
                break
            case "deletar":
                await deletarMetas()
                break
            case "sair":
                console.log("Até a próxima!");
                
                return
        }
    }
}

start()