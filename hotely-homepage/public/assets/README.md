# Asset di Hotely

Carica qui i file in queste sottocartelle. La struttura corrisponde a `src/lib/content/it.ts` — se un asset manca, il componente `AssetWithFallback` mostra un placeholder elegante e logga un warning in console (in dev).

```
public/assets/
├── logo/
│   ├── hotely-logo.svg              # logo light
│   └── hotely-logo-dark.svg         # logo dark
├── hero/
│   ├── hero-video.mp4               # video di sfondo hero
│   ├── hero-video.webm              # versione webm
│   └── hero-image.jpg               # poster + fallback
├── badges/
│   ├── app-store.svg
│   └── google-play.svg
├── clients/
│   ├── park-hotel.svg / poss.png / murataya.png / dream-suites.png /
│   ├── ria.png / lac-hotel.png / bahnhof.png / accanto.png /
│   ├── soul-shake.svg / volemose-bene.svg / sangallo.png /
│   ├── doubletree.svg / lme.png
├── differentiators/
│   ├── totem-photo.jpg
│   └── totem-video.mp4              # opzionale
├── omnichannel/
│   ├── chat-website.png
│   ├── chat-whatsapp.png
│   ├── chat-phone.png
│   └── chat-email.png
├── solutions/
│   ├── hotels.jpg
│   ├── property-manager.jpg
│   ├── restaurants.jpg
│   └── wineries.jpg
├── testimonials/
│   ├── takeshi-yamamoto.jpg
│   ├── takeshi-yamamoto.mp4         # opzionale
│   ├── andrea-moretti.jpg
│   └── francesca-de-luca.jpg
└── cta/
    └── cta-bg-video.mp4             # opzionale
```

## Linee guida

- **Video**: max 5 MB, max 1080p, sempre `.mp4` (H.264) e idealmente anche `.webm` (VP9)
- **Immagini**: jpg/png ottimizzati, possibilmente già a 2x della dimensione di rendering
- **Loghi clienti**: SVG quando possibile, altrimenti PNG con sfondo trasparente
