const test = require('tape');
const repository = require('./repository');

function runTests(){
    var id = null;
    var r = '{"id_autor": "1","data_criacao": ISODate("2018-05-01T00:00:00Z"),"ultima_mod": ISODate("2018-05-01T00:00:00Z"),"titulo": "bolo banana","texto": "farinha e banana (so)","imagem": "https://abrilmdemulher.files.wordpress.com/2016/09/receita-torta-de-maca-de-micro-ondas.jpg?quality=90&strip=info&w=620&h=372&crop=1"}';
    var r2 = '{"id_autor": "1","data_criacao": ISODate("2018-05-01T00:00:00Z"),"ultima_mod": ISODate("2018-05-01T00:00:00Z"),"titulo": "panetone","texto": "farinha e banana (so)","imagem": "https://abrilmdemulher.files.wordpress.com/2016/09/receita-torta-de-maca-de-micro-ondas.jpg?quality=90&strip=info&w=620&h=372&crop=1"}';


    var isoRegex = /ISODate\((".+?")\)/g;
    r = r.replace(isoRegex, function (match, parenGroup) {
        return parenGroup;
    });
    var r_json = JSON.parse(r);

    r2 = r2.replace(isoRegex, function (match, parenGroup) {
        return parenGroup;
    });
    var r2_json = JSON.parse(r2);




    test('Repository GetAllRecipes', (t) => {
        repository.getAllRecipes((err, recipe) => {
            if(recipe && recipe.length > 0) id = recipe[0]._id;
            t.assert(!err && recipe && recipe.length > 0, "All Recipes Returned");
            t.end();
        });
    })

    test("Repository GetRecipeById", (t) => {
        if(!id) {
            t.assert(false, "Recipe by Id Returned");
            t.end();
            return;
        }
    
        repository.getRecipeById(id, (err, recipe) => {
            t.assert(!err && recipe, "Recipe by Id Returned");
            t.end();
        });
    })

    test("Repository InsertNewRecipe", (t) => {
        repository.insertNewRecipe(r_json, (err, recipe) => {
            t.assert(!err && recipe && recipe.length > 0, "Insert Returned");
            t.end();
        })
    })

    test("Repository UpdateRecipe", (t) => {
        repository.updateRecipe(r2_json, id, (err, recipe) => {
            t.assert(!err && recipe && recipe.length > 0, "Update Returned");
            t.end();
        })
    })

    test("Repository removeRecipe", (t) => {
        repository.removeRecipe(id, (err, recipe) => {
            t.assert(!err && recipe && recipe.length > 0, "Revome Returned");
            t.assert();
        })
    })

    test("repository Disconnect", (t) => {
        t.assert(repository.disconnect(), "Disconnect OK");
        t.end();
    })
}
module.exports = {runTests}