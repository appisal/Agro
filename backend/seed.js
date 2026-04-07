const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const User = require('./models/User');
const StorageInventory = require('./models/StorageInventory');

async function seed() {
    require('dns').setServers(['8.8.8.8', '8.8.4.4']); // using the same DNS fix
    await mongoose.connect(process.env.MONGO_URI);
    
    // Create a dummy farmer
    let dummyFarmer = await User.findOne({ email: 'ramesh.farmer@example.com' });
    if (!dummyFarmer) {
        dummyFarmer = await User.create({
            name: 'Ramesh Patil',
            email: 'ramesh.farmer@example.com',
            password: 'dummy_hash',
            role: 'farmer',
            googleId: 'dummy_google_id_for_ramesh'
        });
    }

    await StorageInventory.create({
        user_id: dummyFarmer._id,
        crop_name: 'Premium Organic Wheat',
        quantity: 50,
        unit: 'Quintal',
        price_per_quintal: 2800,
        price_per_kg: 28,
        harvest_date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4), // 4 days ago
        shelf_life_days: 180,
        status: 'Active',
        images: []
    });

    await StorageInventory.create({
        user_id: dummyFarmer._id,
        crop_name: 'Fresh Tomatoes',
        quantity: 35,
        unit: 'Quintal',
        price_per_kg: 40,
        price_per_quintal: 4000,
        harvest_date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1), // 1 day ago
        shelf_life_days: 14,
        status: 'Active',
        images: []
    });

    console.log("Seeded successfully!");
    process.exit(0);
}

seed().catch(err => {
    console.error(err);
    process.exit(1);
});
