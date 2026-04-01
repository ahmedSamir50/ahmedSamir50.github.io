# Ahmed Samir Portfolio

This is my professional engineering portfolio deployed on GitHub Pages natively using Jekyll and Tailwind CSS.

## Adding New Content

This site uses standard Jekyll Layouts. To add a new independent page (e.g. an architecture deep-dive):
1. Create a `.md` file anywhere in the repository.
2. Add the following Front Matter to the top of the file:
   ```yaml
   ---
   layout: default
   title: Your Custom Page Title
   ---
   ```
3. Write your Markdown content below it. GitHub Pages natively compiles and wraps your content using the `_layouts/default.html` template.

## Local Setup & Development

Because this site relies on Jekyll Layouts and Tailwind CSS minification, you cannot just double-click `index.html` to view the site correctly. You must run a local server.

### 1. Prerequisites
- **Node.js**: Installed via [NodeJS.org](https://nodejs.org/).
- **Ruby**: Installed via [RubyInstaller for Windows (with DevKit)](https://rubyinstaller.org/downloads/).

### 2. Install Dependencies

Open your terminal in the project directory and run:
```powershell
# Install Node dependencies for Tailwind CSS processing
npm install

# Install Ruby dependencies for compiling layouts
gem install bundler jekyll
```

### 3. Run the Local Servers

For the best developer experience, you should open **two** terminal windows.

**Terminal 1: Start the Tailwind CSS Watcher**
This watches your HTML/JS files for Tailwind class changes and rebuilds your `style.css` instantly.
```powershell
npm run watch
```

**Terminal 2: Start the Jekyll Local Server**
This watches your `.md`, `_layouts`, and HTML files, compiles the site in memory, and hosts it.
```powershell
jekyll serve --watch
```

Now, simply open your browser to **`http://localhost:4000/`**. 
Any changes you make, whether editing CSS classes or writing a new Markdown page, will hot-reload or become active upon a quick browser refresh!
