var mongoose =requer('mongoose');

var Schema = mongoose.Schema;

var headlineSchema = new Schema({
    _headlineId:{
        type:Schema.Type.ObjectId,
        ref:"Headline"
    },
    date:String,
    noteText:String
});

var Headline = mongoose.model("Headline", headlineSchema);

module.exports = Headline;