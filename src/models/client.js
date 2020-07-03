const {Schema, model } = require('mongoose');


const ClienteSchema= new Schema({
    cliente: {type:String},
    datos: {type:String},
    telefono: {type:String},
    retira: {type:String},
    patente: {type:String, required: true},
   
},
{timestamps:true});


module.exports = model('Cliente',ClienteSchema);