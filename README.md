<<<<<<< HEAD
# Priyank Patel — Portfolio (Vite)

Same design, same CSS, broken into small reusable components.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

```
src/
  main.jsx                 # React entry point
  App.jsx                  # Root component, wires all sections together
  index.css                # Tailwind directives + original global <style> block (fonts, material icons, line-clamp, smooth scroll)
  components/
    FadeUp.jsx              # Scroll fade-up wrapper (uses useFadeUp hook)
    Navbar.jsx
    HeroSection.jsx
    AboutSection.jsx
    SkillsSection.jsx
    ExperienceSection.jsx
    ProjectCard.jsx          # Single project card (used by ProjectsSection)
    ProjectsSection.jsx
    ContactSection.jsx
    Footer.jsx
  hooks/
    useFadeUp.js            # IntersectionObserver-based fade-up hook
  data/
    navData.js
    statsData.js
    skillsData.js
    experienceData.js
    projectsData.js
  styles/
    sharedStyles.js          # glassCard / glassNav style objects shared across components
```

## Notes

- All Tailwind classes, inline `style={{...}}` objects, and color/spacing values are copied verbatim from the original single-file version — nothing was restyled.
- Tailwind is configured via `tailwind.config.js` + `postcss.config.js` (standard Vite + Tailwind setup), since the original relied on an injected global config.
- The `material-symbols-outlined` font, Google Fonts imports, `line-clamp-2`, and `scroll-behavior: smooth` rules from the original inline `<style>` tag now live in `src/index.css`.
=======
# Priyank-Portfolio
>>>>>>> bd0bc04f0112ae62c095e9cb07c5b254d0dc31e8
