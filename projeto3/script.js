function curtir(botao) {
    console.log(botao)
    var icon = botao.querySelector("i")
    console.log(icon)
    if (icon.classList.contains("bi-hand-thumbs-up")) {
        icon.classList.remove("bi-hand-thumbs-up")
        icon.classList.add("bi-hand-thumbs-up-fill")
    }
    else {
        icon.classList.remove("bi-hand-thumbs-up-fill")
        icon.classList.add("bi-hand-thumbs-up")
    }
}