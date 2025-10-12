// utils/cloudinary.js
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

// Configure Cloudinary
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

/**
 * Uploads a file buffer or base64 string to Cloudinary
 * @param {Buffer|string} fileBuffer - The image buffer or a base64 data URI
 * @param {string} folder - The folder in Cloudinary to upload to
 * @returns {Promise<object>} - The Cloudinary upload result
 */
const uploadToCloudinary = (fileBuffer, folder) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: folder, resource_type: 'image' },
      (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      }
    );

    // If it's a buffer, streamify it. If it's a base64 string, Cloudinary handles it.
    if (Buffer.isBuffer(fileBuffer)) {
      streamifier.createReadStream(fileBuffer).pipe(uploadStream);
    } else {
      cloudinary.uploader.upload(fileBuffer, { folder: folder, resource_type: 'image' })
        .then(resolve)
        .catch(reject);
    }
  });
};

module.exports = { cloudinary, uploadToCloudinary };