const modal = new bootstrap.Modal('#aviso', {
    keyboard: false
})

const modalSucesso = new bootstrap.Modal('#sucesso', {
    keyboard: false
})

document.querySelector("#sucesso").addEventListener('hidden.bs.modal', event => {
    window.location.href = "./index.html"
})

var usuario = null

window.addEventListener("load", () => {
    let id = new URLSearchParams(window.location.search).get("id")
    if (!id) return

    document.querySelector(".container").classList.add("oculto")
    document.querySelector("#loading").classList.remove("oculto")

    fetch("https://api-curso-programacao-web.vercel.app/api/usuarios/"+id, {
        headers: {
            "Authorization": "Basic " + btoa("admin:admin")
        }
    })
        .then(resposta => resposta.json())
        .then(resposta => {
            console.log(resposta)
            usuario = resposta
            preencheForm(resposta)
        })
        .catch(error => {
            console.log(error.message)
            modal.show()
        })
})

function preencheForm(usuario) {
    let campos = Object.keys(usuario)
    campos.forEach(campo => {
        if (campo !== "id") document.getElementById(campo).value = usuario[campo]
    })
    document.querySelector(".container").classList.remove("oculto")
    document.querySelector("#loading").classList.add("oculto")
}

document.querySelector("#cep").addEventListener("input", event => {
    document.querySelector("#loadingCEP").classList.remove("oculto")
    
    let value = event.target.value
    
    if (value.length != 8) {
        limpaEndereco()
        return
    }

    console.log(value)

    fetch(`https://viacep.com.br/ws/${value}/json/`)
        .then(resposta => resposta.json())
        .then(resposta => {
            console.log(resposta)
            if (resposta.erro) throw new Error("Erro na requisição!")
            else preencheEndereco(resposta)
        })
        .catch(erro => {
            console.log(erro.message)
            limpaEndereco()
        })
})

function preencheEndereco(endereco) {
    document.querySelector("#loadingCEP").classList.add("oculto")
    document.querySelector("#cep").classList.add("is-valid")
    document.querySelector("#cep").classList.remove("is-invalid")
    document.querySelector("#endereco").value = endereco.logradouro
    document.querySelector("#bairro").value = endereco.bairro
    document.querySelector("#cidade").value = endereco.localidade
    document.querySelector("#estado").value = endereco.uf
}

function limpaEndereco() {
    document.querySelector("#loadingCEP").classList.add("oculto")
    document.querySelector("#cep").classList.remove("is-valid")
    document.querySelector("#cep").classList.add("is-invalid")
    document.querySelector("#endereco").value = ""
    document.querySelector("#bairro").value = ""
    document.querySelector("#cidade").value = ""
    document.querySelector("#estado").value = ""
}

document.querySelector("form").addEventListener("submit", evento => {
    evento.preventDefault()

    let button = document.querySelector('button[type="submit"]')
    button.querySelector("span").classList.remove("oculto")
    button.disabled = true

    let respostas = {}
    let campos = ["nome", "sobrenome", "email", "data_nascimento", "ddd", "telefone", "cep", "endereco", "bairro", "cidade", "estado"]

    campos.forEach(campo => {
        let input = document.querySelector("#"+campo)
        if (!input.value) input.classList.add("is-invalid")
        else {
            input.classList.remove("is-invalid")
            input.classList.add("is-valid")
            respostas[campo] = input.value
        }
    })

    if (document.querySelector(".is-invalid")) {
        button.querySelector("span").classList.add("oculto")
        button.disabled = false
        return
    }

    console.log(respostas)

    let camposNumero = ["ddd", "telefone", "cep"]
    camposNumero.forEach(campo => respostas[campo] = Number(respostas[campo]))

    console.log(respostas)

    let url = "https://api-curso-programacao-web.vercel.app/api/usuarios"
    if (usuario) url += `/${usuario.id}`

    fetch(url, {
        headers: {
            "Authorization": "Basic " + btoa("admin:admin")
        },
        method: usuario ? 'PUT' : 'POST',
        body: JSON.stringify(respostas)
    })
        .then(resposta => {
            console.log(resposta)
            if (resposta.ok && (resposta.status === 201 || resposta.status === 204)) {
                modalSucesso.show()
            }
            else throw new Error("Erro na requisição!")
        })
        .catch(error => {
            console.log(error.message)
            modal.show()
            button.querySelector("span").classList.add("oculto")
            button.disabled = false
        })
})