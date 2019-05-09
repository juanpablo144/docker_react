const mongose = require('mongoose');

mongose.connect('mongodb://localhost/pruebaReactDocker',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is coneccted'))
    .catch(err => console.error(err));