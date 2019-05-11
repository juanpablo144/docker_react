const mongose = require('mongoose');

mongose.connect('mongodb://mongo:27017/pruebaReactDocker',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is coneccted'))
    .catch(err => console.error(err));