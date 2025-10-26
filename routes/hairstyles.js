const express = require('express');
const Hairstyle = require('../models/Hairstyle');
const { optionalAuth } = require('../middleware/auth');
const Analytics = require('../models/Analytics');

const router = express.Router();

// @desc    Get all hairstyles
// @route   GET /api/hairstyles
// @access  Public
// @desc    Get all hairstyles
// @route   GET /api/hairstyles
// @access  Public
router.get('/', optionalAuth, async (req, res, next) => {
  try {
    const {
      category,
      gender,
      feature,
      search,
      page = 1,
      limit = 20,
      sort = 'popularity'
    } = req.query;

    const filters = { isActive: true };
    const orConditions = [];

    // Apply category filter
    if (category && category !== 'All') {
      filters.category = category;
    }

    // Apply gender filter
    if (gender && gender !== 'All') {
      if (gender === 'unisex') {
        filters.gender = 'unisex'; // More specific filter if only unisex is chosen
      } else {
        // Find the selected gender OR unisex
        orConditions.push({
          $or: [
            { gender: gender.toLowerCase() },
            { gender: 'unisex' }
          ]
        });
      }
    }

    // Apply gender filter
    if (feature && feature !== 'Latest') {
      if (feature === 'Basic') {
      orConditions.push({
          $or: [
            { price: 1 }, 
          ]
        });


      } else if (feature === 'Trending') {
      
       orConditions.push({
          $or: [
            { price: 2 },
            { gender: 3 },
          ]
        });

      } else {
  orConditions.push({
          $or: [
            { price: 4 },
            { gender: 5 },
          ]
        });

      }
    }

    // Search functionality
    if (search) {
      // Find matches in any of these fields
      orConditions.push({
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
          { tags: { $in: [new RegExp(search, 'i')] } },
          { culturalOrigin: { $regex: search, $options: 'i' } }
        ]
      });
    }

    // If we have multiple $or conditions, they must all be met ($and)
    if (orConditions.length > 0) {
      filters.$and = orConditions;
    }

    // Sorting
    let sortQuery = {};
    switch (sort) {
      case 'popularity':
        sortQuery = { popularity: -1, generationCount: -1 };
        break;
      case 'newest':
        sortQuery = { createdAt: -1 };
        break;
      case 'name':
        sortQuery = { name: 1 };
        break;
      case 'price':
        sortQuery = { price: 1 };
        break;
      default:
        sortQuery = { generationCount: -1 };
    }

    // Pagination
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    // Execute queries
    const hairstyles = await Hairstyle.find(filters)
      .sort(sortQuery)
      .skip(skip)
      .limit(limitNum);

    const total = await Hairstyle.countDocuments(filters);

    // ... your analytics and response code ...
    
    res.status(200).json({
      status: 'success',
      results: hairstyles.length,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum)
      },
      data: { hairstyles }
    });

  } catch (error) {
    next(error);
  }
});

// @desc    Get single hairstyle
// @route   GET /api/hairstyles/:id
// @access  Public
router.get('/:id', optionalAuth, async (req, res, next) => {
  try {
    const hairstyle = await Hairstyle.findById(req.params.id);

    if (!hairstyle || !hairstyle.isActive) {
      return res.status(404).json({
        status: 'error',
        message: 'Hairstyle not found'
      });
    }

    // Track hairstyle view
    if (req.user) {
      await Analytics.trackEvent('hairstyle_viewed', {
        hairstyle_id: hairstyle._id,
        hairstyle_name: hairstyle.name,
        category: hairstyle.category
      }, req.user.id);
    }

    res.status(200).json({
      status: 'success',
      data: { hairstyle }
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Get popular hairstyles
// @route   GET /api/hairstyles/popular/:limit?
// @access  Public
router.get('/popular/:limit?', async (req, res, next) => {
  try {
    const limit = parseInt(req.params.limit) || 10;
    
    const hairstyles = await Hairstyle.getPopular(limit);

    res.status(200).json({
      status: 'success',
      results: hairstyles.length,
      data: { hairstyles }
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Get hairstyle categories
// @route   GET /api/hairstyles/meta/categories
// @access  Public
router.get('/meta/categories', async (req, res, next) => {
  try {
    const categories = await Hairstyle.distinct('category', { isActive: true });
    
    const categoriesWithCounts = await Promise.all(
      categories.map(async (category) => {
        const count = await Hairstyle.countDocuments({ 
          category, 
          isActive: true 
        });
        return { name: category, count };
      })
    );

    res.status(200).json({
      status: 'success',
      data: { categories: categoriesWithCounts }
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Search hairstyles
// @route   POST /api/hairstyles/search
// @access  Public
router.post('/search', optionalAuth, async (req, res, next) => {
  try {
    const { query, filters = {}, page = 1, limit = 20 } = req.body;

    const hairstyles = await Hairstyle.search(query, filters);
    
    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const paginatedResults = hairstyles.slice(skip, skip + parseInt(limit));

    // Track search
    if (req.user) {
      await Analytics.trackEvent('hairstyles_searched', {
        query,
        filters,
        results_count: hairstyles.length
      }, req.user.id);
    }

    res.status(200).json({
      status: 'success',
      results: paginatedResults.length,
      total: hairstyles.length,
      data: { hairstyles: paginatedResults }
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;