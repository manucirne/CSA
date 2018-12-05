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

    app.post("/login", (req,res) => {
        console.log(req.body);
        if (!req.body.password) {
            return res.status(403).json({message: `Missing password!`}) 
        }
        repository.getLogin(req.body.username, req.body.password, (err, user) => {
            if(err) return err;
            return res.json(user)
        })
    })

}