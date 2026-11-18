# Design in Claude — website

Static site: no build step, no server. Upload this folder as-is.

## Before you publish
1. **Create the Gumroad product** with the permalink `design-in-claude`
   (so the link is https://shushant0657.gumroad.com/l/design-in-claude), price $49,
   and an early-bird discount or a $29 price. Upload `Design-in-Claude.zip` as the content.
   If you choose a different permalink, search-and-replace the URL in every .html file.
2. Check the "Buy" buttons open Gumroad's checkout pop-up (it needs the live product).

## Publish (pick one, all free)
- **Netlify:** app.netlify.com → Add new site → Deploy manually → drag this folder in.
- **Vercel:** vercel.com → Add New → Project → upload this folder (Framework: Other).
- **GitHub Pages:** push this folder to a repo → Settings → Pages → deploy from the main branch.

## Custom domain
Buy a domain (Namecheap, GoDaddy, Cloudflare), then in Netlify/Vercel: Domains → Add domain,
and follow their DNS steps. HTTPS is automatic.
Tip: avoid putting "claude" in the domain itself — it's Anthropic's trademark.

## Structure
- `index.html` — sales page
- `learn/` — course: Levels 0 and 10 free in full, Levels 25–100 show a teaser + buy button
- `assets/` — styles, images, favicon

Buyers get all 7 lessons in full inside the pack (`course/index.html`).
