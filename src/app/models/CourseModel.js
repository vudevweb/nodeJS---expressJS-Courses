const mongoose = require("mongoose");
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId; 

const CourseModel = new Schema({
    author: ObjectId, 
    name: { type: String },
    description: { type: String },
    image: { type: String },
    slug: { type: String , slug:'name' , unique:true}
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', CourseModel); 
