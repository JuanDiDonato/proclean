const {Schema, model} =require('mongoose');

const RegistroSchema= new Schema({
    usuario:{type: String, required: true},
    turno: {type:String},
},


    {timestamps:true}
)

module.exports = model('Transaction', RegistroSchema); 