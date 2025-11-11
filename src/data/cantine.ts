export interface Cantina {
  id: string;
  nome: string;
  località: string;
  descrizione: string;
  storia: string;
  immagine: string;
  vini: string[];
}

export const cantine: Cantina[] = [
  {
    id: "tenuta-valle-reale",
    nome: "Tenuta Valle Reale",
    località: "Popoli (PE)",
    descrizione: "Eccellenza del Montepulciano d'Abruzzo sulle colline del Parco Nazionale del Gran Sasso",
    storia: "Fondata nel 1997, Valle Reale rappresenta l'avanguardia della produzione biologica abruzzese. Le vigne si estendono tra 300 e 350 metri s.l.m., beneficiando del microclima unico creato dal Gran Sasso.",
    immagine: "/assets/cantina-1.jpg",
    vini: ["Montepulciano d'Abruzzo Vigne Nuove", "Trebbiano d'Abruzzo Superiore", "San Calisto Riserva"]
  },
  {
    id: "masciarelli",
    nome: "Masciarelli",
    località: "San Martino sulla Marrucina (CH)",
    descrizione: "Storica cantina che unisce tradizione e innovazione dal 1981",
    storia: "Gianni Masciarelli ha trasformato una piccola realtà familiare in uno dei simboli dell'enologia abruzzese nel mondo. Oggi Marina Cvetic continua la tradizione con dedizione e passione.",
    immagine: "/assets/cantina-2.jpg",
    vini: ["Villa Gemma Montepulciano", "Marina Cvetic Chardonnay", "Iskra"]
  },
  {
    id: "emidio-pepe",
    nome: "Emidio Pepe",
    località: "Torano Nuovo (TE)",
    descrizione: "Produzione artigianale e biodinamica dal 1899",
    storia: "Quattro generazioni di viticoltori che seguono metodi ancestrali: vendemmia manuale, pigiatura a piedi, nessun uso di solfiti. Vini di straordinaria longevità e purezza.",
    immagine: "/assets/cantina-3.jpg",
    vini: ["Montepulciano d'Abruzzo", "Trebbiano d'Abruzzo"]
  },
  {
    id: "valentini",
    nome: "Valentini",
    località: "Loreto Aprutino (PE)",
    descrizione: "Leggenda assoluta del vino abruzzese",
    storia: "Edoardo Valentini ha elevato il Trebbiano d'Abruzzo a vino di culto mondiale. Produzione limitatissima, selezione maniacale, risultati immortali.",
    immagine: "/assets/cantina-4.jpg",
    vini: ["Trebbiano d'Abruzzo", "Montepulciano d'Abruzzo Cerasuolo"]
  },
  {
    id: "tiberio",
    nome: "Tiberio",
    località: "Cugnoli (PE)",
    descrizione: "Eleganza e finezza nei vini delle colline pescaresi",
    storia: "Cristiana Tiberio ha creato in pochi anni un punto di riferimento per l'alta qualità. Vigne coltivate con rispetto assoluto del territorio e vinificazioni impeccabili.",
    immagine: "/assets/cantina-5.jpg",
    vini: ["Pecorino Fonte Canale", "Trebbiano d'Abruzzo Colle Vota", "Montepulciano d'Abruzzo Riserva"]
  },
  {
    id: "torre-dei-beati",
    nome: "Torre dei Beati",
    località: "Loreto Aprutino (PE)",
    descrizione: "Viticoltura eroica tra gli ulivi secolari",
    storia: "Adriana Galasso e Fausto Albanesi hanno scommesso su terreni estremi e vitigni autoctoni rari, producendo vini di carattere indomabile e grande eleganza.",
    immagine: "/assets/cantina-6.jpg",
    vini: ["Montepulciano d'Abruzzo Cocciapazza", "Trebbiano d'Abruzzo Casauria", "Moscato Dolce Adriana"]
  }
];
