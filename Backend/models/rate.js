const mongoose = require('mongoose');
const Rate = mongoose.Schema({
    rate:{type:Number},
    feedback:{type:String}
});

module.exports = mongoose.model('rate', Rate);
//module.exports = Rate;