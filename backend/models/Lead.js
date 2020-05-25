const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  source: String,
  phone: Number,
  email: String,
  notes: [
    {
      note: String,
      date: { type: Date, default: Date.now },
    },
  ],
  date: { type: Date, default: Date.now },
  business_id: String,
});
module.exports = mongoose.model("Lead", LeadSchema);
