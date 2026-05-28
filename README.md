# portfolio

my personal site, [ishanbarot.com](https://ishanbarot.com). dark, lowercase, mildly nerdy. built it because the old one was bugging me every time i opened it.

## stack

- next.js 14 (app router) + typescript
- tailwind for styling, shadcn-style component layout
- framer-motion / motion for the scroll reveals and the timing on stuff
- spline for the 3d scene in the hero
- geist sans + mono
- lucide for most icons, hand-rolled svgs for the brand ones (lucide v1 dropped them)

## running it locally

```bash
npm install
npm run dev
```

then open [localhost:3000](http://localhost:3000). page hot reloads as you change things.

## structure

```
app/            next.js routes, layout, favicons (icon.tsx + apple-icon.tsx)
components/
  sections/     the actual page sections (hero, work, projects, etc)
  ui/           reusable bits (card, spotlight, spline wrapper, brand icons)
lib/utils.ts    cn() helper
```

most of the content lives in the section files. the bento grid for projects is in `components/sections/projects.tsx`, work history in `experience.tsx`. edit those.

## colors / theme

dark by default. accent is `#6488ea`. tokens live in `app/globals.css` and `tailwind.config.ts`.

## deploy

i run it on vercel. push to main, it picks up automatically. nothing fancy.

## credits

- 3d scene from [spline](https://spline.design)
- spotlight pattern adapted from aceternity
- card scaffold from shadcn/ui
