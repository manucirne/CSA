const test = require('tape');
const repository = require('./repository');
function runTests(){
    var id = null;
    test('Repository pega todas as colheitas', (t) => {
        repository.pegaTodasColheitas((err, colheitas) => {
            if(colheitas && colheitas.length > 0) id = colheitas[0]._id;
            
            t.assert(!err && colheitas && colheitas.length > 0, "Todas as colheitas retornadas");
            t.end();
        });
    });
    
    test('Repository pegaColheitasAgricultor', (t) => {
        if(!id) {
            t.assert(false, "Colheita by Id Returned");
            t.end();
            return;}
            repository.pegaColheitasAgricultor(id, (err, colheita) => {
                t.assert(!err && colheita, "Colheita by Id Returned");
                t.end();
            });
        });

    
        test('Repository Disconnect', (t) => {
            t.assert(repository.disconnect(), "Disconnect Ok");
            t.end();
        });
    }
    module.exports = { runTests }



            // test('Repository GetMoviePremiers', (t) => {
        //     repository.getMoviePremiers((err, movies) => {
        //         t.assert(!err && movies && movies.length > 0, "Movie Premiers Returned");
        //         t.end();
        //     });
        // })

        
        // test('Repository insere nova colheita', (t) =>{

        //         var dadosMock =  {
        //             _id :ObjectId,
        //             id_autor : "MANUMANUMANU",
        //             timestamp : ISODate("2018-05-01T00:00:00Z"),
        //             data_colheita : ISODate("2019-07-01T00:00:00Z"),
        //             id_agricultor : "2",
        //             detalhes_colheita : {
                    
        //                 alface:{
        //                     deposito : "minha casa",
        //                     quantidade : 13.222,
        //                     unidade :"kg",
        //                     quant_bercos : 22,
        //                     canteiros_colhidos : ["1","3","4","antigos canteiros"],
        //                     mensagem :"a terra estava úmida"
        //                     },
        //                 abacate:{
        //                     deposito : "minha casa",
        //                     quantidade : 3.222,
        //                     unidade :"kg",
        //                     quant_bercos : 22,
        //                     canteiros_colhidos : ["1","3","4","antigos canteiros"],
        //                     mensagem :"a terra estava úmida"
        //                     }
                    
                    
                    
        //                 }};
        //         repository.insereNovaColheita(dadosMock, (err) =>{
        //             t.assert(!err && dadosMock)
        //             // t.assert
        //         });
        //     });