// Script to create a circular favicon from an image
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if canvas is available
let canvas;
try {
  canvas = await import('canvas');
} catch (e) {
  console.log('Canvas package not found. Using SVG fallback...');
}

const createCircularFavicon = async () => {
  const inputPath = path.join(__dirname, '../src/assets/picture.jpeg');
  const outputPath = path.join(__dirname, '../public/favicon.jpg');
  
  if (!fs.existsSync(inputPath)) {
    console.error('Input image not found:', inputPath);
    return;
  }

  if (canvas) {
    try {
      // Use canvas to create circular image
      const { createCanvas, loadImage } = canvas.default || canvas;
      
      const img = await loadImage(inputPath);
      const size = Math.min(img.width, img.height);
      const canvasInstance = createCanvas(size, size);
      const ctx = canvasInstance.getContext('2d');
      
      // Create circular clipping path
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.clip();
      
      // Draw image centered
      const x = (size - img.width) / 2;
      const y = (size - img.height) / 2;
      ctx.drawImage(img, x, y);
      
      // Save as JPEG
      const buffer = canvasInstance.toBuffer('image/jpeg', { quality: 0.9 });
      fs.writeFileSync(outputPath, buffer);
      console.log('Circular favicon created successfully!');
    } catch (err) {
      console.error('Error creating circular favicon:', err);
      createSVGFavicon();
    }
  } else {
    createSVGFavicon();
  }
};

const createSVGFavicon = () => {
  // Create an SVG favicon that displays the image in a circle
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="circle">
      <circle cx="16" cy="16" r="16"/>
    </clipPath>
  </defs>
  <image href="/favicon.jpg" width="32" height="32" clip-path="url(#circle)"/>
</svg>`;
  
  const svgPath = path.join(__dirname, '../public/favicon.svg');
  fs.writeFileSync(svgPath, svgContent);
  console.log('SVG favicon created. Note: You may need to convert the image to circular manually for best results.');
};

createCircularFavicon();

