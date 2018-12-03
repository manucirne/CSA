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

    app.get("/login/:l/:s", (req,res,next) => {
        repository.getLogin(req.params.l, req.params.s, (err, user) => {
            if(err) return next(err);
            res.json(user)
        })
    })

}