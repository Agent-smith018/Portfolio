# Hero Image Setup

To add your hero image to the portfolio:

1. **Add your image file** to the `public/` folder
2. **Name it** `hero-image.jpg` (or update the HTML to match your filename)
3. **Recommended specifications:**
   - **Size:** 600x600px or larger (square aspect ratio)
   - **Format:** JPG, PNG, or WebP
   - **Quality:** Professional headshot or portrait
   - **Background:** Plain or transparent background works best

## Current Image Reference
The HTML currently references: `hero-image.jpg`

## Alternative Image Names
If you prefer a different filename, update the `src` attribute in `index.html`:

```html
<img src="your-image-name.jpg" alt="Smit Prajapati - Full-Stack Developer" class="hero-photo">
```

## CSS Styling
The image is styled with:
- Circular crop (border-radius: 50%)
- 300px width/height
- Purple border matching the theme
- Hover effects (scale and shadow)
- Smooth transitions

Replace `hero-image.jpg` with your actual photo to complete the hero section!