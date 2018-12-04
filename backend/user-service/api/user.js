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

    app.get("/login", (req,res,next) => {
        repository.getLogin(req.body.l, req.body.s, (err, user) => {
            if(err) return next(err);
            res.json(user)
        })
    })

}