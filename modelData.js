const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Create a Geolocation schema
const schGeo = new schema({
    type: {
        type: String,
        default: "point"
    }, 
    coordinates: {
        type: [Number], 
        index: "2dsphere"
    }
});

const schNinja = new schema({
    name: {
        type : String, 
        required: [true, 'Name is Required']
    },
    rank: {
        type: String
    },
    available: {
            type: Boolean, 
            default: false
        },
    geometry: schGeo
});

const ninja = mongoose.model('ninja', schNinja);

module.exports = ninja;