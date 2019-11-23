function todosBlogs() {

    $.ajax({
        url: 'http://localhost:8000/api/blog',
        type: 'get',
        dataType: 'json',
        success: function (data) {

            blogs = data.docs;

            conteudo = '';
            for (i = 0; i < blogs.length; i++) {
                blogString = JSON.stringify(blogs[i]);

                conteudo = conteudo + '<div class="col-md-4">\n\
                                        <h2>' + blogs[i].nome + '</h2>\n\
                                        <p>' + blogs[i].descricao + '</p>\n\
                                        <p>\n\
                                        <a class="btn btn-secondary" href="#" onclick="verBlog(\'' + blogs[i]._id + '\', \'' + blogs[i].nome + '\', \'' + blogs[i].descricao + '\');" role="button">Ver blog >>\n\
                                        </a></p></div>';
            }

            $('#blogs').html(conteudo);

        }
    });

}

function verBlog(_id, nome, descricao) {
    sessionStorage._id = _id;
    sessionStorage.nome = nome;
    sessionStorage.descricao = descricao;

    location.href = 'blog.html';
}

function getPosts(idBlog) {

    $.ajax({
        url: 'http://localhost:8000/api/post',
        type: 'get',
        dataType: 'json',
        data: 'id_blog=' + idBlog,
        contentType: 'application/json',
        async: false,
        success: function (data) {

            posts = data.docs;

            conteudo = '';
            for (i = 0; i < posts.length; i++) {
                
                //Separa as sessões
                sessao = '';
                sessaoPost = posts[i].sessao;
                for (s = 0; s < sessaoPost.length; s++) {
                    sessao = sessao+'<p>'+(s+1)+' - <b>'+sessaoPost[s].titulo+'</b><br/>'+sessaoPost[s].conteudo+'</p>';
                }
                
                conteudo = conteudo + '<div class="col-md-12">\n\
                                       <h2>'+posts[i].titulo+'</h2>\n\
                                       <p>'+sessao+'</p>\n\
                                       <hr/><br/></div>';
            }

            $('#posts').html(conteudo);

            console.log(posts);
        }
    });

}