export interface Vino {
  id: string;
  nome: string;
  cantina: string;
  tipologia: "Rosso" | "Bianco" | "Rosato" | "Passito" | "Spumante";
  vitigno: string;
  annata?: string;
  descrizione: string;
  noteDiDegustazione: {
    vista: string;
    olfatto: string;
    gusto: string;
  };
  abbinamenti: string[];
  temperatura: string;
  immagine: string;
}

export const vini: Vino[] = [
  {
    id: "montepulciano-san-calisto",
    nome: "San Calisto Riserva",
    cantina: "Valle Reale",
    tipologia: "Rosso",
    vitigno: "Montepulciano d'Abruzzo 100%",
    annata: "2018",
    descrizione: "Il vertice assoluto della produzione Valle Reale. Maturazione in barrique per 18 mesi seguita da affinamento in bottiglia.",
    noteDiDegustazione: {
      vista: "Rosso rubino intenso con riflessi granati",
      olfatto: "Complesso bouquet di frutti rossi maturi, spezie dolci, tabacco e cioccolato fondente",
      gusto: "Pieno, elegante, con tannini setosi e lunghissima persistenza"
    },
    abbinamenti: ["Carni rosse alla griglia", "Brasati", "Formaggi stagionati", "Tartufo nero"],
    temperatura: "18-20°C",
    immagine: "/src/assets/vino-valle-reale-san-calisto.jpg"
  },
  {
    id: "trebbiano-valentini",
    nome: "Trebbiano d'Abruzzo",
    cantina: "Valentini",
    tipologia: "Bianco",
    vitigno: "Trebbiano d'Abruzzo 100%",
    annata: "2016",
    descrizione: "Vino di culto mondiale. Longevo, complesso, capace di evoluzioni straordinarie. Produzione limitatissima.",
    noteDiDegustazione: {
      vista: "Giallo dorato brillante",
      olfatto: "Note di frutta esotica, miele di acacia, erbe aromatiche e mineralità intensa",
      gusto: "Ricco, strutturato, con acidità vibrante e finale sapido di grande lunghezza"
    },
    abbinamenti: ["Pesce di mare", "Risotti ai funghi porcini", "Carni bianche elaborate"],
    temperatura: "12-14°C",
    immagine: "/src/assets/vino-valentini-trebbiano.jpg"
  },
  {
    id: "cerasuolo-valentini",
    nome: "Cerasuolo d'Abruzzo",
    cantina: "Valentini",
    tipologia: "Rosato",
    vitigno: "Montepulciano d'Abruzzo 100%",
    annata: "2020",
    descrizione: "Il rosato più elegante e complesso d'Italia. Nulla a che vedere con i rosati comuni: struttura, profondità, longevità.",
    noteDiDegustazione: {
      vista: "Rosa cerasuolo brillante",
      olfatto: "Fragole, melograno, fiori rosa, erbe aromatiche",
      gusto: "Fresco ma strutturato, con tannini delicati e grande persistenza aromatica"
    },
    abbinamenti: ["Brodetto di pesce", "Arrosticini", "Primi piatti elaborati"],
    temperatura: "14-16°C",
    immagine: "/src/assets/vino-valentini-cerasuolo.jpg"
  },
  {
    id: "pecorino-tiberio",
    nome: "Pecorino Fonte Canale",
    cantina: "Tiberio",
    tipologia: "Bianco",
    vitigno: "Pecorino 100%",
    descrizione: "Il Pecorino nella sua massima espressione: mineralità, freschezza, eleganza. Un vitigno autoctono finalmente valorizzato.",
    noteDiDegustazione: {
      vista: "Giallo paglierino con riflessi verdolini",
      olfatto: "Agrumi, fiori bianchi, erbe aromatiche mediterranee, note minerali",
      gusto: "Fresco, sapido, con struttura e finale persistente"
    },
    abbinamenti: ["Crudi di mare", "Fritture di pesce", "Formaggi freschi"],
    temperatura: "10-12°C",
    immagine: "/src/assets/vino-tiberio-pecorino.jpg"
  },
  {
    id: "montepulciano-cocciapazza",
    nome: "Montepulciano Cocciapazza",
    cantina: "Torre dei Beati",
    tipologia: "Rosso",
    vitigno: "Montepulciano d'Abruzzo 100%",
    descrizione: "Da vigne coltivate tra gli ulivi secolari. Carattere selvaggio e grande eleganza si fondono in perfetto equilibrio.",
    noteDiDegustazione: {
      vista: "Rosso rubino profondo",
      olfatto: "Frutti di bosco, viola, liquirizia, note balsamiche",
      gusto: "Potente ma raffinato, tannini vivi, acidità vibrante"
    },
    abbinamenti: ["Agnello al forno", "Stufati", "Formaggi pecorini stagionati"],
    temperatura: "16-18°C",
    immagine: "/src/assets/vino-torre-beati-cocciapazza.jpg"
  },
  {
    id: "villa-gemma",
    nome: "Villa Gemma",
    cantina: "Masciarelli",
    tipologia: "Rosso",
    vitigno: "Montepulciano d'Abruzzo 100%",
    annata: "2017",
    descrizione: "L'icona di Masciarelli. Selezione delle migliori uve, affinamento in barrique francesi, risultato monumentale.",
    noteDiDegustazione: {
      vista: "Rosso rubino intenso",
      olfatto: "Frutti neri maturi, spezie dolci, vaniglia, note tostate",
      gusto: "Pieno, vellutato, con tannini morbidi e lunga persistenza"
    },
    abbinamenti: ["Selvaggina", "Brasati al vino rosso", "Formaggi stagionati"],
    temperatura: "18-20°C",
    immagine: "/src/assets/vino-masciarelli-villa-gemma.jpg"
  }
];
