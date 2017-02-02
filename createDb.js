var mongoose = require('./libs/mongoose');
var User = require('./models/user').User;

mongoose.connection.on('open', function () {

    var db = mongoose.connection.db;
    db.dropDatabase(function (err) {
        if (err) throw err;
        console.log('ok');
    })
});
