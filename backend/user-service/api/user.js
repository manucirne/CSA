module.exports = (app, repository) => {
    app.get("/user", (req, res, next) => {
        repository.getAllUser((err, user) => {
            if(err) return next(err);
            res.json(user);
        });
    })

    app.get("/user/:id", (req, res, next) => {
        repository.getUserById(req.params.id, (err, user) => {
            if(err) return next(err);
            res.json(user)
        });
    })

    app.post("/user/login", (req,res) => {
        console.log(req.body);
        if (!req.body.senha) {
            return res.status(403).json({message: `Missing password!`}) 
        }
        repository.getLogin(req.body.login, req.body.senha, (err, user) => {
            if(err) return err;
            return res.json(user)
        })
    })

}