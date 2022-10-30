//Listar Posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error.message))

//Buscar Post
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        document.querySelector(".post .title").textContent = json.title
        document.querySelector(".post .body").textContent = json.body
    })
    .catch((error) => console.log(error.message))

//Criar Post
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Titulo do Post',
        body: 'Corpo do Post',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error.message))

//Editar Post
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error.message))

//Editar campo do Post
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'foo',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error.message))

//Deletar Post
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
})
    .then((response) => console.log(response.status))
    .catch((error) => console.log(error.message))