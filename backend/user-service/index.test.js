require("dotenv-safe").load();
require("./config/mongodb.test").runTests();
require("./server/server.test").runTests();
require("./api/user.test").runTests();
require("./repository/repository.test").runTests();
