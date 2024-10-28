const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
  animal:{
    animalName: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
  }},
  owner: {
    ownerName: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
      
    },
    email: {
      type: String,
      required: true,
      
    },
    smsConsent: {
      type: Boolean,
      required: true,
    },
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
     
    },
    city: {
      type: String,
      required: true,
    },
    
    additionalNotes: {
      type: String,
    },
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Animal', AnimalSchema);
