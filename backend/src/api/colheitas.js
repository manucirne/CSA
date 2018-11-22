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

    


      app.view('/colheitas', (req, res) => {
        // console.log(req.body) 
        if (req.body.id_agricultor) {
            repository.pegaColheitasAgricultor(req.body.id_agricultor,(err, colheita) => {
                if(err) return next(err);
                res.json(colheita);
              });
        } else if (req.body.id_autor) {

            repository.pegaColheitasUsuario(req.body.id_autor,(err, colheita) => {
                if(err) return next(err);
                res.json(colheita);
              });

            console.log('nao tem z')
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
            })
        }


        else{
        repository.pegaTodasColheitas((err, colheitas) => {
            if(err) return next(err);
            res.json(colheitas);
        });

        }

       


    })


    //   app.get('/colheitas/agricultor/:id', (req, res, next) => {
    //     repository.pegaColheitasAgricultor(req.params.id,(err, colheita) => {
    //       if(err) return next(err);
    //       res.json(colheita);
    //     });
    //   });

    // app.post('/colheitas/', (req, res, next) => {
    //   repository.getMoviePremiers((err, colheitas) => {
    //     if(err) return next(err);
    //     // res.json(movies)
    //     res.send(movies)
    //   });
    // });

    // app.delete('/colheitas/:id', (req, res, next) => {
    //   repository.getMovieById(req.params.id, (err, movie) => {
    //     if(err) return next(err);
    //     res.json(movie)
    //   });
    // });

    // app.put('/colheitas/:id', (req, res, next) => {
    //     repository.pegaColheitas(req.params.id, (err, movie) => {
    //       if(err) return next(err);
    //       res.json(movie)
    //     });
    //   });

    app.post('/teste', (req, res) => {
        console.log(req.body)
        if (req.body.z) {
            console.log('tem z')
        } else {
            console.log('nao tem z')
        }
    })


}