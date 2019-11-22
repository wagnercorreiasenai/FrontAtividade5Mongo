function todosBlogs() {

    $.ajax({
        url: 'http://localhost:8000/api/blog',
        type: 'get',
        dataType: 'json',
        success: function (msg) {
            console.log(msg);
        }
    });

}

function getPosts(idBlog) {

    $.ajax({
        url: 'http://localhost:8000/api/post',
        type: 'get',
        dataType: 'json',
        data: 'id_blog='+idBlog,
        contentType: 'application/json',
        async: false,
        success: function (msg) {
            console.log(msg);
        }
    });

}