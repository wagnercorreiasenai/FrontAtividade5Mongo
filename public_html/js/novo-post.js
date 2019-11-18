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
                      <button class="btn btn-default" onclick="criarSubtopico(\'top' + contTopico + '\');">Adicionar sub-tópico</button>\n\
                      <hr/>';

    conteudoTopico = '<li id="top' + contTopico + '">' + conteudoTopico + '</li>';

    $('#sessoes').append(conteudoTopico);

}

function criarSubtopico(codses) {

    conteudoTopico = '<div class="form-group">\n\
                      <input autofocus type="text" class="form-control" id="t' + contTopico + '" name="t' + contTopico + '" placeholder="Informe o título da sessão" />\n\
                      </div>\n\
                      <div class="form-group">\n\
                      <textarea placeholder="Conteúdo da sessão" id="c' + contTopico + '" name="c' + contTopico + '" class="form-control"></textarea>\n\
                      </div>\n\
                      <button class="btn btn-default" onclick="criarSubtopico(\'top' + contTopico + '\');">Adicionar sub-tópico</button>\n\
                      <hr/>';

}

window.onload = function () {
    setarDataPublicacao();
    //criarTopico();
};