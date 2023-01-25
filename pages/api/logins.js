function login(request, response){
    const info = data

    response.json({
        id: info.id,
        nome: info.user,
        senha: info.senha
    })
}

export default login;