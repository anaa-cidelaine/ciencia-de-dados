const (url) = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {

        const res = await fetch('https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json')

        const dados = await res.json()

        console.log(dados);

    }

    visualizarInformacoesGlobais()
 