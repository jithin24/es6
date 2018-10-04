const express = require('express');
const router = express.Router();
const modelNinja = require('./modelData');

//get a list of Ninjas from the DB
router.get('/ninjas', function(req, res, next){
    /*
    modelNinja.find({}).then(function(ninjas){
       res.send(ninjas); 
    });
    */
   console.log({"lng": req.query.lng, "lat": req.query.lat});
   modelNinja.geoNear(
       {
           type: "point", coordinates: [
                                    parseFloat(req.query.lng),
                                    parseFloat(req.query.lat) 
                                    ]
        }, 
        {maxDistance: 100000, spherical: true}
    ).then(function(ninjas){
        res.send(ninjas);
    })
});

//add a new Ninja to the DB
router.post('/ninjas', function(req, res, next){
    //console.log(req.body);
    modelNinja.create(req.body).then(function(resNinja){
        res.send(resNinja);
    }).catch(next);
});

//Update a Ninja to the DB
router.put('/ninjas/:id', function(req, res, next){
    modelNinja.findByIdAndUpdate({_id: req.params.id}, 
    req.body).then(function(ninja){
        res.send(ninja);
    });
});

//Delete a Ninja from the DB
router.delete('/ninjas/:id', function(req, res, next){
    //console.log(req.params.id);
    modelNinja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
    res.send(ninja);
    });
});

module.exports = router;