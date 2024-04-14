const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://vudevweb:vudo354z@cluster0.2o1wq4u.mongodb.net/f8_nodejs', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected successfully!');
    } catch (error) {
        console.log('Connection error! ' + error);
    }
}

module.exports = { connect };
