module.exports = (app, repository) => {

    app.get('/recipes', (req, res, next) => {
        repository.getAllRecipes((err, recipes) => {
            if(err) return next(err);
            res.json(recipes);
        })
    })

    app.get('/recipes/:id', (req, res ,next) => {
        repository.getRecipeById(req.params.id, (err, recipe) => {
            if(err) return next(err);
            res.json(recipe);
        })
    })

    app.post('/recipes/new', (req, res, next) => {
        var id_autor = req.body.id_autor;
        var data = new Date();
        var data_criacao = data.toISOString();
        var ultima_mod = data.toISOString();
        var titulo = req.body.titulo;
        var texto = req.body.texto;
        var imagem = req.body.imagem;

        var r = '{"id_autor": ' + id_autor + ', "data_criacao": ' + data_criacao + ', "ultima_mod": ' + ultima_mod + ', "titulo": '+ titulo + ', "texto": '+ texto + ', "imagem": '+ imagem + '}'
        var isoRegex = /ISODate\((".+?")\)/g;
        r = r.replace(isoRegex, function (match, parenGroup) {
            return parenGroup;
        });
        r_json = JSON.parse(r),

        repository.insertNewRecipe(r_json, (err, recipe) => {
            if(err) return next(err);
            console.log(recipe)
            res.json(recipe);
        })
    })

    app.post('/recipes/udpdate/:id', (req, res, next) => {
        var id_autor = req.body.id_autor;
        var data = new Date();
        var data_criacao = req.body.data_criacao;
        var ultima_mod = data.toISOString();
        var titulo = req.body.titulo;
        var texto = req.body.texto;
        var imagem = req.body.imagem;
        var id = req.params.id;

        var r = '{"id_autor": ' + id_autor + ', "data_criacao": ' + data_criacao + ', "ultima_mod": ' + ultima_mod + ', "titulo": '+ titulo + ', "texto": '+ texto + ', "imagem": '+ imagem + '}'
        var isoRegex = /ISODate\((".+?")\)/g;
        r = r.replace(isoRegex, function (match, parenGroup) {
            return parenGroup;
        });
        r_json = JSON.parse(r),

        repository.updateRecipe(r_json, id, (err, recipe) => {
            if(err) return next(err);
            res.json(recipe);
        })
    })

    app.post('/recipes/remove/:id', (req, res, next) => {
        var id = req.params.id;

        repository.removeRecipe(id, (err, recipe) => {
            if (err) return next(err);
            res.json(recipe);
        })
    })

}