export const content = {
  meta: {
    title: "Hotely — Il receptionist AI che non dorme",
    description:
      "Hotely risponde ai tuoi ospiti 24/7 su WhatsApp, telefono e sito. Automatizza l'80% delle richieste, riscuote la tassa di soggiorno via Stripe e ti fa incassare diretto, senza commissioni Booking.",
    url: "https://www.hotely.ai",
    siteName: "Hotely",
    locale: "it_IT",
    ogImage: "/assets/og-image.jpg",
  },
  navbar: {
    links: [
      { label: "Soluzioni", href: "#soluzioni" },
      { label: "Prezzi", href: "#pricing" },
      { label: "Blog", href: "/blog" },
      { label: "Changelog", href: "/changelog" },
      { label: "Contatti", href: "/contatti" },
    ],
    languages: ["IT", "EN"],
    login: { label: "Login", href: "/login" },
    cta: { label: "Prenota demo", href: "/demo" },
  },
  hero: {
    eyebrow: "🇮🇹 La piattaforma AI per l'ospitalità italiana",
    h1Lines: [
      "Il receptionist AI che non dorme,",
      "parla 100 lingue",
      "e incassa la tassa di soggiorno per te.",
    ],
    subtitle:
      "Hotely risponde ai tuoi ospiti 24/7 su WhatsApp, telefono e sito in meno di 5 secondi. Automatizza l'80% delle richieste, riscuote la tassa di soggiorno via Stripe e ti fa incassare diretto, senza commissioni Booking.",
    ctaPrimary: { label: "Prenota una demo (15 min)", href: "/demo" },
    ctaSecondary: { label: "Vedi i prezzi", href: "#pricing" },
    microcopy:
      "Setup in 3 minuti · Senza carta di credito · Conforme al fisco italiano",
    badges: [
      {
        label: "App Store",
        href: "https://apps.apple.com",
        src: "/assets/badges/app-store.svg",
        alt: "Scarica Hotely su App Store",
      },
      {
        label: "Google Play",
        href: "https://play.google.com",
        src: "/assets/badges/google-play.svg",
        alt: "Scarica Hotely su Google Play",
      },
    ],
  },
  trustBar: {
    eyebrow: "Scelto da 200+ strutture in tutta Italia",
    clients: [
      { name: "Park Hotel", src: "/assets/clients/park-hotel.svg" },
      { name: "POSS", src: "/assets/clients/poss.png" },
      { name: "Murataya", src: "/assets/clients/murataya.png" },
      { name: "Dream Suites", src: "/assets/clients/dream-suites.png" },
      { name: "Ria", src: "/assets/clients/ria.png" },
      { name: "Lac Hotel", src: "/assets/clients/lac-hotel.png" },
      { name: "Bahnhof", src: "/assets/clients/bahnhof.png" },
      { name: "Accanto", src: "/assets/clients/accanto.png" },
      { name: "Soul Shake", src: "/assets/clients/soul-shake.svg" },
      { name: "Volemose Bene", src: "/assets/clients/volemose-bene.svg" },
      { name: "Sangallo", src: "/assets/clients/sangallo.png" },
      { name: "DoubleTree", src: "/assets/clients/doubletree.svg" },
      { name: "LME", src: "/assets/clients/lme.png" },
    ],
  },
  differentiators: {
    eyebrow: "Cosa fa Hotely che gli altri non fanno",
    h2: "Tre cose che nessun chatbot internazionale può darti.",
    cards: [
      {
        icon: "Receipt",
        title: "Tassa di soggiorno automatica",
        description:
          "Riscuoti la tassa al check-in, non a mano. Calcolo per Comune, riscossione via Stripe Connect, ricevuta all'ospite, report pronto per il versamento. Zero Excel, zero contestazioni.",
        metric: "4 ore/settimana",
        metricLabel: "risparmiate sulla front desk",
      },
      {
        icon: "Banknote",
        title: "Pagamenti diretti, fattura italiana",
        description:
          "I tuoi incassi arrivano sul tuo IBAN, con fatturazione elettronica integrata. Niente ritenute Booking del 17%, niente attese di 30 giorni.",
        metric: "+15%",
        metricLabel: "di margine recuperato dai canali OTA",
      },
      {
        icon: "QrCode",
        title: "Totem brandizzati, on-property",
        description:
          "L'unica AI hospitality con stand fisici. Spedizione gratuita di totem e card NFC personalizzati per il tuo brand. L'ospite scansiona, l'AI risponde, tu monitori dall'app.",
        metric: "0 attese",
        metricLabel: "per i tuoi ospiti",
      },
    ],
    totem: {
      image: "/assets/differentiators/totem-photo.jpg",
      video: "/assets/differentiators/totem-video.mp4",
      caption: "I totem Hotely in struttura",
    },
  },
  problemSolution: {
    eyebrow: "Per chi gestisce davvero una struttura",
    h2: "Le 5 cose che oggi ti fanno perdere ore (e che Hotely fa al posto tuo).",
    rows: [
      {
        problem:
          "Telefono che squilla alle 23 per «posso fare check-in tardi?»",
        solution:
          "L'AI risponde, manda istruzioni, parcheggio e codice cassaforte",
      },
      {
        problem:
          "Recensione persa perché nessuno ha risposto al messaggio WhatsApp del giovedì",
        solution: "Risposta in 5 secondi, in lingua, anche in ferie",
      },
      {
        problem: "Tassa di soggiorno gestita su Excel a fine mese",
        solution: "Incassata al check-in, report pronto per il Comune",
      },
      {
        problem: "Commissioni Booking che ti mangiano il 17%",
        solution: "Prenotazioni dirette dal sito con upsell automatico",
      },
      {
        problem: "Staff che parla solo italiano davanti al cliente giapponese",
        solution: "100 lingue automatiche, anche al telefono",
      },
    ],
    cta: { label: "Vedi una demo dal vivo", href: "/demo" },
  },
  omnichannel: {
    eyebrow: "Omnichannel",
    h2: "Un'unica AI. Cinque canali. Mai una richiesta persa.",
    body: "WhatsApp, telefono, SMS, email, sito web e richieste da Booking.com. Hotely gestisce automaticamente l'80% delle richieste su ogni canale.",
    tabs: [
      {
        id: "website",
        label: "Sito web",
        title: "Chat sul tuo sito, in 100 lingue",
        description:
          "Widget integrato che risponde in tempo reale a chi visita il tuo sito, con prenotazioni dirette.",
        messages: [
          { from: "guest", text: "Avete camere disponibili dal 15 al 17?" },
          {
            from: "ai",
            text: "Sì! Per due notti abbiamo la Suite Vista Mare a €240 incluso colazione. Vuoi prenotare?",
          },
          { from: "guest", text: "Perfetto, prenoto." },
        ],
      },
      {
        id: "whatsapp",
        label: "WhatsApp",
        title: "WhatsApp Business automatico",
        description:
          "Risposte istantanee 24/7 anche fuori orario, con upsell e conferme automatiche.",
        messages: [
          { from: "guest", text: "Hi, do you have late check-in?" },
          {
            from: "ai",
            text: "Yes! Late check-in is available until 23:00. After that, our smart-lock code will be sent here. Anything else?",
          },
          { from: "guest", text: "Could you also book a parking spot?" },
        ],
      },
      {
        id: "phone",
        label: "Telefono",
        title: "AI Phone, sempre in linea",
        description:
          "Risposte vocali naturali in qualsiasi lingua, smistamento automatico, niente attese.",
        messages: [
          { from: "guest", text: "Buonasera, vorrei prenotare per sabato." },
          {
            from: "ai",
            text: "Certo. Per quante persone e quante notti? Le mando subito conferma via SMS.",
          },
          { from: "guest", text: "Due persone, una notte. Grazie." },
        ],
      },
      {
        id: "email",
        label: "SMS + Email",
        title: "Risposte automatiche, tono umano",
        description:
          "Hotely classifica, risponde e archivia ogni email. Quello che non sa, gira allo staff.",
        messages: [
          { from: "guest", text: "Posso modificare la prenotazione #82741?" },
          {
            from: "ai",
            text: "Ho aggiornato il check-out al 18. Ti ho inviato la conferma via email e l'aggiornata fattura.",
          },
          { from: "guest", text: "Grazie mille!" },
        ],
      },
    ],
  },
  solutions: {
    eyebrow: "Soluzioni",
    h2: "Una piattaforma AI, quattro soluzioni su misura.",
    body: "Configurazione e features specifiche per ogni tipo di struttura.",
    cards: [
      {
        eyebrow: "AI Chat + AI Phone",
        title: "Hotel & B&B",
        image: "/assets/solutions/hotels.jpg",
        bullets: [
          "Chat multilingua",
          "AI Phone",
          "Prenotazioni dirette",
          "Upselling automatico",
        ],
        cta: { label: "Scopri", href: "/soluzioni/hotel" },
      },
      {
        eyebrow: "Gestione affitti brevi",
        title: "Property Manager",
        image: "/assets/solutions/property-manager.jpg",
        bullets: [
          "Check-in automatico",
          "Risposte istantanee",
          "Multi-property",
          "Report analitici",
        ],
        cta: { label: "Scopri", href: "/soluzioni/property-manager" },
      },
      {
        eyebrow: "Smart AI Menu",
        title: "Ristoranti & Bar",
        image: "/assets/solutions/restaurants.jpg",
        bullets: [
          "100+ lingue auto",
          "Menu interattivo",
          "Suggerimenti AI",
          "Scontrino medio +22%",
        ],
        cta: { label: "Scopri", href: "/soluzioni/ristoranti" },
      },
      {
        eyebrow: "Da Vinitaly 2026 a tutto l'anno",
        title: "Cantine & Wine Experience",
        image: "/assets/solutions/wineries.jpg",
        bullets: [
          "Cataloghi multilingua",
          "Prenotazione degustazioni QR",
          "Raccolta dati GDPR",
          "Esperienze venduto",
        ],
        cta: {
          label: "Scopri Hotely per Cantine",
          href: "/soluzioni/cantine",
        },
        featured: true,
      },
    ],
  },
  setup: {
    eyebrow: "Attivazione",
    h2: "Online in 3 minuti. Conforme al fisco da subito.",
    body: "Niente sviluppatore, niente codice. Registrati e vai live subito.",
    steps: [
      {
        number: "01",
        title: "Registrati",
        description:
          "Crea il tuo account e aggiungi i dati chiave della struttura.",
      },
      {
        number: "02",
        title: "Configura l'AI",
        description:
          "Aggiungi servizi, menu o prodotti. L'AI impara tutto in pochi secondi.",
      },
      {
        number: "03",
        title: "Vai live",
        description:
          "L'AI risponde su ogni canale mentre tu monitori dall'app.",
      },
    ],
    cta: { label: "Prenota una demo", href: "/demo" },
  },
  stats: {
    items: [
      { value: 200, suffix: "+", label: "Agenti AI attivi" },
      {
        value: 150,
        suffix: "k+",
        label: "Messaggi gestiti negli ultimi 30 giorni",
      },
      { value: 98, suffix: "%", label: "Risoluzione senza intervento umano" },
      {
        value: 18,
        prefix: "+",
        suffix: "%",
        label: "Revenue medio per camera nei primi 90 giorni",
      },
    ],
  },
  testimonials: {
    eyebrow: "Lo dicono i clienti",
    h2: "Risultati misurabili, in italiano.",
    items: [
      {
        name: "Takeshi Yamamoto",
        role: "Ristorante Murataya, Milano",
        quote:
          "Il menu digitale traduce automaticamente i piatti in giapponese, inglese e italiano. I clienti stranieri ora ordinano con sicurezza e lo scontrino medio è cresciuto del 22%.",
        image: "/assets/testimonials/takeshi-yamamoto.jpg",
        video: "/assets/testimonials/takeshi-yamamoto.mp4",
      },
      {
        name: "Andrea Moretti",
        role: "Grand Hotel Vesuvio, Napoli",
        quote:
          "L'upselling automatico di suite ed esperienze ci ha portato un +18% di revenue per camera. Il ROI è stato immediato, già dal primo mese.",
        image: "/assets/testimonials/andrea-moretti.jpg",
      },
      {
        name: "Francesca De Luca",
        role: "Como Luxury Stays, Lago di Como",
        quote:
          "Gestisco 14 appartamenti e Hotely risponde agli ospiti 24/7 in qualsiasi lingua. Ho dimezzato i tempi di gestione e le recensioni a 5 stelle sono raddoppiate.",
        image: "/assets/testimonials/francesca-de-luca.jpg",
      },
    ],
  },
  pricing: {
    eyebrow: "Trasparenza, sempre",
    h2: "Si ripaga in media in 14 giorni.",
    body: "Tre piani, da €89/mese. Niente setup fee, niente commissioni sui pagamenti diretti, cancelli quando vuoi. Per le strutture sotto le 10 camere, c'è il piano Starter gratuito per 14 giorni.",
    cta: { label: "Vedi tutti i piani", href: "/pricing" },
    chart: [
      { day: "1", value: 8 },
      { day: "3", value: 22 },
      { day: "5", value: 38 },
      { day: "7", value: 55 },
      { day: "10", value: 78 },
      { day: "14", value: 100 },
    ],
  },
  faq: {
    h2: "Domande frequenti",
    items: [
      {
        q: "Quanto tempo serve per attivarla?",
        a: "La configurazione base richiede 3 minuti. L'integrazione completa con telefono, WhatsApp Business e channel manager si completa in 24-48 ore con il nostro supporto incluso.",
      },
      {
        q: "Cosa succede se l'AI sbaglia?",
        a: "Ogni conversazione passa per filtri di qualità. Se l'AI non sa rispondere, gira automaticamente al tuo staff via app. Hai sempre il controllo: puoi rivedere ogni messaggio in tempo reale.",
      },
      {
        q: "È conforme alla normativa italiana?",
        a: "Sì. Hotely gestisce tassa di soggiorno per Comune, fattura elettronica via SDI, GDPR e DAC7. È sviluppata in Italia da Aurora Technologies S.r.l. specificamente per il fisco italiano.",
      },
      {
        q: "Posso provarla prima di pagare?",
        a: "Sì. Puoi iniziare con 14 giorni gratuiti, senza carta di credito. Demo dal vivo con un consulente in 15 minuti.",
      },
      {
        q: "Si integra con il mio gestionale?",
        a: "Hotely si integra con i principali PMS e channel manager italiani (Booking.com, Airbnb, Vertical Booking, Krossbooking e altri). Se usi un sistema custom, il nostro team configura l'integrazione gratuitamente.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Il futuro dell'ospitalità",
    h2Lines: [
      "Smetti di rispondere alle stesse domande.",
      "Inizia a far crescere la struttura.",
    ],
    body: "Unisciti a 200+ hotel, B&B, ristoranti e property manager italiani che hanno scelto Hotely.",
    ctaPrimary: { label: "Prenota la demo (15 min)", href: "/demo" },
    ctaSecondary: { label: "Parla con un consulente", href: "/contatti" },
    bgVideo: "/assets/cta/cta-bg-video.mp4",
  },
  footer: {
    columns: [
      {
        title: "Esplora",
        links: [
          { label: "Documentazione", href: "/docs" },
          { label: "Newsletter", href: "/newsletter" },
          { label: "Login", href: "/login" },
          { label: "Privacy", href: "/privacy" },
          { label: "Condizioni Generali", href: "/terms" },
        ],
      },
      {
        title: "Contatti",
        links: [
          {
            label: "Aurora Technologies S.r.l.",
            href: "https://aurora.technology",
          },
          { label: "hello@hotely.ai", href: "mailto:hello@hotely.ai" },
          { label: "Sede: Solaro (MI)", href: "#" },
          { label: "P.IVA 14056600969", href: "#" },
        ],
      },
    ],
    copyright: "© 2026 Hotely. Tutti i diritti riservati.",
    poweredBy: "Aurora Technologies",
  },
} as const;

export type Content = typeof content;
