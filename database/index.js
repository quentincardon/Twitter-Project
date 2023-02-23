const mongoose = require('mongoose');

exports.clientPromise = mongoose
  .connect('mongodb+srv://quentin:yhnuj@cluster0.djftsho.mongodb.net/twitter?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
                .then( () => console.log('connexion ok '))
                .catch( err => console.log(err));