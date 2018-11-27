const test = require('tape');
const repository = require('./repository');

function runTests(){
    var id = null;

    test('Repository GetAllUser', (t) => {
        repository.getAllUser((err, user) => {
            if(user && user.length > 0) id = user[0]._id;
            t.assert(!err && user && user.length > 0, "All Users Returned");
            t.end();
        });
    })

    test("Repository GetUserById", (t) => {
        if(!id) {
            t.assert(false, "User by Id Returned");
            t.end();
            return;
        }
 
        repository.getUserById(id, (err, user) => {
            t.assert(!err && user, "User by Id Returned");
            t.end();
        });
    })

    test("repository Disconnect", (t) => {
        t.assert(repository.disconnect(), "Disconnect OK");
        t.end();
    })
}

module.exports = {runTests}