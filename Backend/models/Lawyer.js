const mongoose = require('mongoose');

const Rate = mongoose.Schema({
    rate:{type:Number},
    feedback:{type:String}
}); 

const Lawyer = mongoose.Schema({
    name:{type:String},
    id:{type:Number},
    rates:{type:[Rate]}
});

module.exports = mongoose.model('Lawyers', Lawyer);
