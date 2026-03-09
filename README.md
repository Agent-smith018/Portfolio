<<<<<<< HEAD
# Portfolio
My dynamic full-stack developer portfolio 
=======
# Smit Prajapati - Portfolio Website

A responsive vanilla HTML/CSS/JavaScript portfolio website showcasing full-stack development projects and skills.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 1024px
- **Dark Theme**: Modern dark theme with glassmorphism effects
- **Smooth Animations**: AOS-like reveal animations and smooth scrolling
- **Interactive Elements**: Mobile navigation, back-to-top button, form validation
- **Performance Optimized**: Lightweight vanilla JavaScript, optimized CSS

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: DOM manipulation, event handling, form validation
- **Google Fonts**: Inter (body) and JetBrains Mono (code elements)

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Complete stylesheet
├── script.js           # Vanilla JavaScript functionality
└── README.md           # This file
```

## 🏃‍♂️ Running Locally

### Option 1: Python HTTP Server
```bash
cd portfolio
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Option 2: Node.js HTTP Server
```bash
cd portfolio
npx http-server -p 8000
```

### Option 3: PHP Built-in Server
```bash
cd portfolio
php -S localhost:8000
```

## 📱 Sections

1. **Navigation**: Sticky navbar with mobile hamburger menu
2. **Hero**: Introduction with call-to-action buttons
3. **About**: Personal information and statistics
4. **Skills**: Technology stack organized by category
5. **Projects**: Showcase of 6 featured projects with tech badges
6. **Experience**: Timeline of professional and educational background
7. **Contact**: Contact form with social media links

## 🎨 Customization

### Colors
Update CSS custom properties in `styles.css`:
```css
:root {
  --primary: #6366f1;      /* Main accent color */
  --dark-bg: #0a0a0a;      /* Background color */
  --text-primary: #ffffff; /* Primary text */
  --text-secondary: #a1a1aa; /* Secondary text */
}
```

### Content
Edit the following in `index.html`:
- Personal information in hero and about sections
- Project details and links
- Experience timeline entries
- Social media URLs and email

### Projects
Each project card includes:
- Title and description
- Technology badges
- GitHub and live demo links

## 📊 Performance

- **Load Time**: <2 seconds on standard hosting
- **Core Web Vitals**: Optimized for good scores
- **Accessibility**: WCAG compliant with proper ARIA labels
- **SEO**: Semantic HTML with meta tags

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository
2. Deploy automatically on push
3. Custom domain support included

### Vercel
1. Import from GitHub
2. Automatic deployments
3. Global CDN included

### GitHub Pages
1. Enable Pages in repository settings
2. Select main branch
3. Access at `https://username.github.io/repository`

### Traditional Hosting
Upload all files to your web server via FTP.

## 📞 Contact

**Smit Prajapati**
- Location: Blainville, Quebec, Canada
- Email: smit.prajapati@email.com
- LinkedIn: linkedin.com/in/smitprajapati
- GitHub: github.com/smitprajapati

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript
>>>>>>> 036c9a3 (Launch dynamic portfolio)
