// insertData.js

const mongoose = require('mongoose');
const StockModel = require('./StockModel.js'); // Adjust the path as needed
const { microsoft }=require('./microsoftdata.js');
const { apple } = require('./appledata.js');
const { amazon } = require('./amazondata.js');
const { tata } = require('./tatadata.js');
const { google } = require('./googledata.js');


// Combine data arrays with corresponding company names
const companiesData = [
  { name: 'apple', data: apple },
  { name: 'tata', data: tata },
  { name: 'amazon', data: amazon },
  { name: 'microsoft', data: microsoft },
  { name: 'google', data: google },
];

// Connect to MongoDB
mongoose.connect(process.env.DB_URL || 'mongodb+srv://atharva:pkY76XU2!LbU3Wb@cluster0.puvwt8t.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  try {
    // Iterate over companiesData and insert each company's data
    for (const companyData of companiesData) {
      const result = await StockModel.create(companyData);
      console.log(`Data for ${companyData.name} inserted successfully:`, result);
    }
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    // Close the connection after inserting data
    mongoose.connection.close();
  }
});

