function enviarBlog() {

    var dados = {
        "nome": $('#nome').val(),
        "descricao": $('#descricao').val(),
        "nome_usuario": $('#nomeUsuario').val(),
        "login": $('#login').val(),
        "senha": $('#senha').val()
    };

    $.ajax({
        url: 'http://localhost:8000/api/blog',
        type: 'POST',
        data: JSON.stringify(dados),
        contentType: 'application/json',
        dataType: 'json',
        success: function (msg) {
            alert("Blog criado com sucesso !");
            location.href = 'index.html';
        }
    });

    return false;

}