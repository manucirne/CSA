// let req = await fetch('/colheitas', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         nome: 'fred',
//         idade: 21,
//         id_agricultor: "2"
//     })
// });


// req = await req.json()


module.exports = (app, repository) => {

    
    

      app.post('/colheitas', (req, res) => {
        // console.log(req.body) 

        if(req.body.inserir){
            repository.insereNovaColheita(dadosColheitas,(err, colheitas) => {
                if(err) return next(err);
                res.status(200).send('Colheita inserida com sucesso!');
            });
        }

        else if (req.body._id){
            repository.pegaColheita(req.body._id,(err, colheitas) => {
                if(err) return next(err);
                res.json(colheitas);
            });

        }

        else if(req.body.id_agricultor && req.body.id_autor){
            repository.pegaColheitaUsuarioAgricultor((req.body.id_agricultor,req.body.id_autor), (err,colheitas) =>{
                if(err) return next(err);
                res.json(colheitas);
            });
        }

        else if (req.body.id_agricultor) {
            repository.pegaColheitasAgricultor(req.body.id_agricultor,(err, colheita) => {
                if(err) return next(err);
                res.json(colheita);
              });
        } 
        
        else if (req.body.id_autor) {

            repository.pegaColheitasUsuario(req.body.id_autor,(err, colheita) => {
                if(err) return next(err);
                res.json(colheita);
              });

            console.log('nao tem z')
        }  

        else{
        repository.pegaTodasColheitas((err, colheitas) => {
            if(err) return next(err);
            res.json(colheitas);
        });

        }

    });


    app.post('/colheitas', (req, res) => {
        res.send("TESTE");
    });
}