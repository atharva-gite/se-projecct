// StockModel.js

const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  name: String,  // Company name (e.g., 'apple', 'tata', etc.)
  data: [
    {
      x: Date,
      open: Number,
      high: Number,
      low: Number,
      close: Number,
      volume: Number,
    },
    // ... other data properties
  ],
});

const StockModel = mongoose.model('Stock', stockSchema);

module.exports = StockModel;
