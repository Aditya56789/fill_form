const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Name: String,
    Email:String,
    Phonenumber: Number,
    year: String,
    Location: String,
    city: String,
    state: String,
    vehicle:String,
    charges:String,
});

const User8 = mongoose.model('PGdata', UserSchema);

const roomSchema = new mongoose.Schema({
  Name: String,
    Email:String,
    Phonenumber: Number,
    year: String,
    Location: String,
    city: String,
    state: String,
    vehicle:String,
    charges:String,
  
}); 


const Room = mongoose.model('Room', roomSchema,'pgdatas');
 module.exports={User8,Room};