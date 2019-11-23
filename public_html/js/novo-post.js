function setarDataPublicacao() {

//Captura a data atual
    var d = new Date();

    var campoDataPub = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
    var campoHorarioPub = d.getHours() + ':' + d.getMinutes();

    $('#data').val(campoDataPub);
    $('#hora').val(campoHorarioPub);

}

var contTopico = 1;
function criarTopicoPrincipal() {

    contTopico++;

    conteudoTopico = '<div class="form-group">\n\
                      <input autofocus type="text" class="form-control" id="t' + contTopico + '" name="t' + contTopico + '" placeholder="Informe o título da sessão" />\n\
                      </div>\n\
                      <div class="form-group">\n\
                      <textarea placeholder="Conteúdo da sessão" id="c' + contTopico + '" name="c' + contTopico + '" class="form-control"></textarea>\n\
                      </div>\n\
                      <button class="btnSub" type="button" class="btn btn-default" onclick="criarSubtopico(\'top' + contTopico + '\');">Adicionar sub-tópico</button>\n\
                      <ul id="subtop' + contTopico + '"></ul>\n\
                      <hr/>';

    conteudoTopico = '<li id="top' + contTopico + '">' + conteudoTopico + '</li>';

    $('#sessoes').append(conteudoTopico);

}

function criarSubtopico(codses) {

    conteudoTopico = '<div class="form-group">\n\
                    <input autofocus type="text" class="form-control" id="subt1" name="subt1[]" placeholder="Informe o título da sessão" />\n\
                    </div>\n\
                    <div class="form-group">\n\
                    <textarea placeholder="Conteúdo da sessão" id="subc1" name="subc1[]" class="form-control"></textarea>\n\
\n\                 <hr/>\n\
                    </div>';

    conteudoTopico = '<li>' + conteudoTopico + '</li>';

    $('#sub' + codses).append(conteudoTopico);

}

function enviarPost() {

    var dados = {
        "id_blog": $('#id_blog').val(),
        "titulo_post": $('#titulo').val(),
        "data_post": "" + $('#data').val() + "T" + $('#hora').val() + ":00.201-03:00",
        "sessao_blog": [
            {
                "titulo": $('#t1').val(),
                "conteudo": $('#c1').val()
            }
        ]
    };

    for (i = 2; i <= contTopico; i++) {
        sessao = null;
        sessao = {
            titulo: $('#t' + i).val(),
            conteudo: $('#c' + i).val()
        };
        dados.sessao_blog.push(sessao);
    }

    $.ajax({
        url: 'http://localhost:8000/api/post',
        type: 'POST',
        data: JSON.stringify(dados),
        contentType: 'application/json',
        dataType: 'json',
        success: function (msg) {
            alert("Post criado com sucesso !");
            location.href = 'index.html';
        }
    });

    return false;

}

function listarBlogs() {

    $.ajax({
        url: 'http://localhost:8000/api/blog',
        type: 'get',
        dataType: 'json',
        success: function (data) {

            blogs = data.docs;

            conteudo = '';
            for (i = 0; i < blogs.length; i++) {
                conteudo = conteudo + '<option value="'+blogs[i]._id+'">'+blogs[i].nome+'</value>';
            }

            $('#id_blog').html(conteudo);

        }
    });

}

window.onload = function () {
    listarBlogs();
    setarDataPublicacao();
};