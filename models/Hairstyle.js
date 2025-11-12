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
    enum:  ['Low Cut','Bob',  'Fades',  'Coils',  'Afros',  'Locs',  'Twists',  'Braids',  'Weaves',  'Protective',  'Straight',  'Relaxed',  'Traditional',  'Modern',  'Fashion']
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
  },
    isCustom: {
    type: Boolean,
    default: false
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: function() { return this.isCustom; }
  }  
},  

{
  timestamps: true
});

// -----------------------------------------------------------------
// Optimized Indexes to fix Mongoose Timeout Errors
// -----------------------------------------------------------------

// 1. Text Search Index (Existing - Crucial for 'search' query)
hairstyleSchema.index({  
    name: 'text',  
    ai_description: 'text',  
    tags: 'text'  
});


// 2. Default List & Popularity Sort (Existing - Fixes the GET:/api/hairstyles?sort=popularity timeout)
hairstyleSchema.index({  
    isActive: 1,  
    isCustom: 1,  
    popularity: -1,  
    createdAt: -1  
});

// 3. Category Metadata (Existing - Fixes the GET:/api/hairstyles/meta/categories timeout)
hairstyleSchema.index({  
    isActive: 1,  
    category: 1  
});


// 4. *** NEW CRITICAL INDEX ***: Custom Hairstyle View
// Fixes timeouts when filtering by a specific user's custom styles.
hairstyleSchema.index({ 
    isActive: 1, 
    isCustom: 1, 
    userId: 1, 
    createdAt: -1 
});

// 5. *** NEW CRITICAL INDEX ***: Price Feature Filter ('Basic')
// Optimizes queries that include the price range filter (e.g., price: {$lte: 1}).
hairstyleSchema.index({ 
    isActive: 1, 
    isCustom: 1, 
    price: 1 
});

// 6. *** NEW CRITICAL INDEX ***: Gender & Sort
// Helps the performance of the complex $or condition for gender (gender OR unisex).
hairstyleSchema.index({ 
    isActive: 1, 
    isCustom: 1, 
    gender: 1, 
    popularity: -1 
});

// 7. Redundant index removed: hairstyleSchema.index({ category: 1, gender: 1 });
// The new indexes cover this functionality more efficiently.

// -----------------------------------------------------------------

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