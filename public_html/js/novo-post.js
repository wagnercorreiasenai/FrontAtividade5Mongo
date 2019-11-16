function setarDataPublicacao() {

//Captura a data atual
    var d = new Date();

    var campoDataPub = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
    var campoHorarioPub = d.getHours() + ':' + d.getMinutes();

    $('#data').val(campoDataPub);
    $('#hora').val(campoHorarioPub);

}

window.onload = function () {
    setarDataPublicacao();
};