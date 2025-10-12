const mongoose = require('mongoose');

const hairstyleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
 
  category: {
    type: String,
    required: true,
    enum: ['Braids', 'Natural', 'Modern', 'Traditional', 'Protective', 'Locs']
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'unisex']
  },
  thumbnail: {
    type: String,
    required: true
  },  
  ai_description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
 
  popularity: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  }, 
  isActive: {
    type: Boolean,
    default: true
  },
 
  generationCount: {
    type: Number,
    default: 0
  },
  averageRating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  } 
}, {
  timestamps: true
});

// Indexes
hairstyleSchema.index({ category: 1, gender: 1 });
hairstyleSchema.index({ popularity: -1 });
hairstyleSchema.index({ isActive: 1 });
hairstyleSchema.index({ tags: 1 });

// Method to increment generation count
hairstyleSchema.methods.incrementGeneration = function() {
  this.generationCount += 1;
  this.popularity = Math.min(100, this.popularity + 0.1); // Slight popularity boost
  return this.save();
};

// Static method to get popular hairstyles
hairstyleSchema.statics.getPopular = function(limit = 10) {
  return this.find({ isActive: true })
    .sort({ popularity: -1, generationCount: -1 })
    .limit(limit);
};

 

module.exports = mongoose.model('Hairstyle', hairstyleSchema);