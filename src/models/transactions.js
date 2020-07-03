const {Schema, model} =require('mongoose');

const TransactionSchema= new Schema({
    fecha:{type: String},
    turno: {type:String},
    categoria: {type:Number},
    cantidad1: {type:String},
    nombreT:{type:String},
    dominio: {type:String},
    mes: {type:String},
    lavado: {type:String},
    cantidad2: {type:String},
    importe: {type:String},
    tipo: {type:String}
},


    {timestamps:true}
)

module.exports = model('Transaction', TransactionSchema); 