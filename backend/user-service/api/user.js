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
}