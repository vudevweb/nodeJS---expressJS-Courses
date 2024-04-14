const mongoose = require("mongoose");
const slug = require('mongoose-slug-updater');
var mongooseDelete = require('mongoose-delete');



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

mongoose.plugin(slug);
CourseModel.plugin(mongooseDelete, { 
    deletedAt : true,
    overrideMethods: 'all' 
});

module.exports = mongoose.model('Course', CourseModel); 

