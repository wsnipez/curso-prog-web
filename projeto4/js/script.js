const modal = new bootstrap.Modal('#aviso', {
    keyboard: false
})

document.querySelector("#aviso").addEventListener('hidden.bs.modal', event => {
    document.querySelector("#loading").classList.add("oculto")
})

const modalExclusao = new bootstrap.Modal('#deletar', {
    keyboard: false,
    backdrop: "static"
})

const modalSucesso = new bootstrap.Modal('#sucesso', {
    keyboard: false
})

document.querySelector("#sucesso").addEventListener('hidden.bs.modal', buscarDados)

window.addEventListener("load", buscarDados)

var usuarios = []

function buscarDados() {
    document.querySelector(".tabela").classList.add("oculto")
    document.querySelector(".graficos").classList.add("oculto")
    document.querySelector("#loading").classList.remove("oculto")

    fetch("https://api-curso-programacao-web.vercel.app/api/usuarios", {
        headers: {
            "Authorization": "Basic " + btoa("admin:admin")
        }
    })
        .then(resposta => resposta.json())
        .then(resposta => {
            console.log(resposta)
            usuarios = resposta
            exibirDados(resposta)
        })
        .catch(error => {
            console.log(error.message)
            modal.show()
        })
}

function montarTabela(usuarios) {
    let tbody = document.querySelector("tbody")
    tbody.innerHTML = ""

    usuarios.forEach(usuario => {
        //let data = new Date(usuario.data_nascimento).toLocaleDateString("pt-br",{timeZone: "Europe/London"})
        //1998-03-05
        //[1998,03,05]
        //[05,03,1998]
        //05/03/1998
        let data = usuario.data_nascimento.split("-").reverse().join("/")
        let telefone = `(${usuario.ddd}) ${usuario.telefone}`
        let endereco = `${usuario.endereco}, ${usuario.bairro}, ${usuario.cidade} - ${usuario.estado}, ${usuario.cep}`

        let linha = `<tr>
            <td>
                <button type="button" class="btn btn-dark" onclick="editar(this)">
                    <i class="bi bi-pencil-fill"></i>
                </button>
            </td>
            <td>
                <button type="button" class="btn btn-dark" onclick="deletar(this)">
                    <i class="bi bi-trash-fill"></i>
                </button>
            </td>
            <td class="user-id">${usuario.id}</td>
            <td class="user-name">${usuario.nome + " " + usuario.sobrenome}</td>
            <td>${usuario.email}</td>
            <td>${data}</td>
            <td>${telefone}</td>
            <td>${endereco}</td>
        </tr>`

        tbody.innerHTML += linha
    })

    if (!tbody.innerHTML) tbody.innerHTML = `<tr>
        <td colspan="8">Não há dados</td>
    </tr>`
}

function editar(button) {
    let linha = button.parentElement.parentElement
    let id = linha.querySelector(".user-id").textContent
    console.log(id)

    window.location.href = "./formulario.html?id="+id
}

function deletar(button) {
    let linha = button.parentElement.parentElement
    let id = linha.querySelector(".user-id").textContent
    let nome = linha.querySelector(".user-name").textContent
    console.log(id)

    document.querySelector("#nomeUsuario").textContent = nome
    document.querySelector("#idUsuario").textContent = id

    modalExclusao.show()
}

function excluir() {
    let modalDeletar = document.querySelector("#deletar")
    modalDeletar.querySelector("span").classList.remove("oculto")
    modalDeletar.querySelectorAll("button").forEach(button => button.disabled = true)

    let id = document.querySelector("#idUsuario").textContent

    fetch("https://api-curso-programacao-web.vercel.app/api/usuarios/"+id, {
        headers: {
            "Authorization": "Basic " + btoa("admin:admin")
        },
        method: "DELETE"
    })
        .then(resposta => {
            console.log(resposta)
            if (resposta.ok && resposta.status === 204) {
                modalDeletar.querySelector("span").classList.add("oculto")
                modalDeletar.querySelectorAll("button").forEach(button => button.disabled = false)
                modalExclusao.hide()
                modalSucesso.show()
            }
            else throw new Error("Erro na requisição!")
        })
        .catch(error => {
            console.log(error.message)
            modalDeletar.querySelector("span").classList.add("oculto")
            modalDeletar.querySelectorAll("button").forEach(button => button.disabled = false)
            modalExclusao.hide()
            modal.show()
        })
}

function filtrar() {
    let value = document.querySelector("#filtro").value
    let expressaoRegular = new RegExp(value, "i")

    let novoArray = usuarios.filter(usuario => {
        let nomeCompleto = `${usuario.nome} ${usuario.sobrenome}`
        return expressaoRegular.test(nomeCompleto)
    })
    console.log(novoArray)
    exibirDados(novoArray)
}

function exibirDados(dados) {
    montarTabela(dados)

    const options = {
        width: 500,
        height: 350,
        chartArea: {
            width: "100%",
            height: "80%"
        }
    }

    const cidades = gerarDados(dados, ["Cidade","Qtd Usuários"], "cidade")
    criarGrafico(cidades, {...options, title: "Cidade dos Usuários"}, "grafico-cidades", "column")

    const estados = gerarDados(dados, ["Estado","Qtd Usuários"], "estado")
    criarGrafico(estados, {...options, title: "Estado dos Usuários"}, "grafico-estados", "column")

    const provedoresEmail = dados.map(dado => {
        let provedor = dado.email.split("@")[1].split(".")[0]
        return {provedor: provedor}
    })
    const emails = gerarDados(provedoresEmail, ["E-mail","Qtd Usuários"], "provedor")
    criarGrafico(emails, {...options, title: "E-mail dos Usuários"}, "grafico-emails", "pie")

    const idadeUsuarios = dados.map(dado => {
        let idade = getIdade(dado.data_nascimento).toString()
        console.log(idade)
        return {idade: idade}
    })
    const idades = gerarDados(idadeUsuarios, ["Idade","Qtd Usuários"], "idade")
    criarGrafico(idades, {...options, title: "Idade dos Usuários"}, "grafico-idades", "pie")

    document.querySelector(".pesquisa").classList.remove("oculto")
    document.querySelector(".tabela").classList.remove("oculto")
    document.querySelector(".graficos").classList.remove("oculto")
    document.querySelector("#loading").classList.add("oculto")
}

function getIdade(data) {
    let hoje = new Date().getTime()
    let nascimento = new Date(data).getTime()
    let idade = (hoje - nascimento) / (86400000 * 365.25)
    return Math.floor(idade)
}

google.charts.load('current', {'packages':['corechart']});

function gerarDados(usuarios, header, campo) {
    let array = [header]
    let lista = usuarios.map(usuario => usuario[campo])
    let valores = [...new Set(lista)]
    valores.forEach(valor => {
        let contagem = 0
        lista.forEach(dado => {
            if (dado == valor) contagem++
        })
        array.push([valor, contagem])
    })
    return array
}

function criarGrafico(dados, options, id, tipo) {
    let elemento = document.getElementById(id)

    if (dados.length === 1 && tipo == "column") dados.push([null,0])

    let data = google.visualization.arrayToDataTable(dados)

    let grafico
    if (tipo == "column") grafico = new google.visualization.ColumnChart(elemento)
    else if (tipo == "pie") grafico = new google.visualization.PieChart(elemento)

    grafico.draw(data, options)
}