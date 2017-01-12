var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
function seed () {

    seeder.connect('mongodb://holmstn-mean-client-internal-db-4120730:8082', function() {
    
        // Load Mongoose models
        seeder.loadModels([
            'app/Client.js'
        ]);
    
        // Clear specified collections
        seeder.clearModels(['Client'], function() {
    
            // Callback to populate DB once collections have been cleared
            seeder.populateModels(data);
    
        });
    });
};

module.exports = seed;

// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'Client',
        'documents': [
            {   
                'id': 1,
                'name': 'Bob',
                'clientCode': 'DCE',
                'financial': true,
                'clinical': false
            },
            {   
                'id': 2,
                'name': 'Luke',
                'clientCode': 'FGA',
                'financial': false,
                'clinical': true 
            },
            {   
                'id': 3,
                'name': 'Shivana',
                'clientCode': 'EEE',
                'financial': true,
                'clinical': true 
            },
            {   
                'id': 4,
                'name': 'Kristy',
                'clientCode': 'WEC',
                'financial': false,
                'clinical': false
            },
        ]
    }
];
