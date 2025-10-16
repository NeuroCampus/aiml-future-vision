import fs from 'fs';
import path from 'path';

// Function to convert bytes to human readable format
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Function to get all image files in a directory
function getImageFiles(dir) {
  const imageFiles = [];
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip the optimized directory to avoid infinite recursion
      if (file !== 'optimized') {
        imageFiles.push(...getImageFiles(filePath));
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext)) {
        imageFiles.push({
          path: filePath,
          name: file,
          size: stat.size
        });
      }
    }
  });
  
  return imageFiles;
}

// Main function to analyze image sizes
function analyzeImages() {
  console.log('Analyzing image files in public directory...\n');
  
  const publicDir = './public';
  const imageFiles = getImageFiles(publicDir);
  
  // Sort by file size (largest first)
  imageFiles.sort((a, b) => b.size - a.size);
  
  console.log('Largest images:');
  console.log('================');
  
  let totalSize = 0;
  imageFiles.forEach((file, index) => {
    totalSize += file.size;
    if (index < 20) { // Show top 20 largest files
      console.log(`${index + 1}. ${file.name}: ${formatBytes(file.size)}`);
    }
  });
  
  console.log(`\nTotal images: ${imageFiles.length}`);
  console.log(`Total size: ${formatBytes(totalSize)}`);
  
  console.log('\nRecommendations:');
  console.log('================');
  console.log('1. Consider compressing images larger than 1MB');
  console.log('2. Use WebP format for better compression');
  console.log('3. Implement responsive images with srcset');
  console.log('4. Add lazy loading to images (already done in this project)');
  console.log('5. Use Vercel\'s built-in image optimization (enabled via vite-plugin-image-optimizer)');
}

// Run the analysis
analyzeImages();