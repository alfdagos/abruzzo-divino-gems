import valleReale from "@/assets/cantina-valle-reale.jpg";
import masciarelli from "@/assets/cantina-masciarelli.jpg";
import emidioPepe from "@/assets/cantina-emidio-pepe.jpg";
import valentini from "@/assets/cantina-valentini.jpg";
import tiberio from "@/assets/cantina-tiberio.jpg";
import torreDeiBeati from "@/assets/cantina-torre-dei-beati.jpg";

export interface Cantina {
  id: string;
  nome: string;
  località: string;
  descrizione: string;
  storia: string;
  immagine: string;
  vini: string[];
  filosofia: string;
  ettari: number;
  fondazione: number;
  produzione: string;
}

export const cantine: Cantina[] = [
  {
    id: "tenuta-valle-reale",
    nome: "Tenuta Valle Reale",
    località: "Popoli (PE)",
    descrizione: "Eccellenza del Montepulciano d'Abruzzo sulle colline del Parco Nazionale del Gran Sasso",
    storia: "Fondata nel 1997, Valle Reale rappresenta l'avanguardia della produzione biologica abruzzese. Le vigne si estendono tra 300 e 350 metri s.l.m., beneficiando del microclima unico creato dal Gran Sasso.",
    immagine: valleReale,
    vini: ["Montepulciano d'Abruzzo Vigne Nuove", "Trebbiano d'Abruzzo Superiore", "San Calisto Riserva"],
    filosofia: "Viticoltura biologica certificata, rispetto assoluto del territorio e delle sue caratteristiche uniche. Ogni bottiglia racconta la storia delle montagne abruzzesi.",
    ettari: 55,
    fondazione: 1997,
    produzione: "180.000 bottiglie/anno"
  },
  {
    id: "masciarelli",
    nome: "Masciarelli",
    località: "San Martino sulla Marrucina (CH)",
    descrizione: "Storica cantina che unisce tradizione e innovazione dal 1981",
    storia: "Gianni Masciarelli ha trasformato una piccola realtà familiare in uno dei simboli dell'enologia abruzzese nel mondo. Oggi Marina Cvetic continua la tradizione con dedizione e passione.",
    immagine: masciarelli,
    vini: ["Villa Gemma Montepulciano", "Marina Cvetic Chardonnay", "Iskra"],
    filosofia: "Tradizione familiare e innovazione tecnologica per esaltare il carattere unico dei vitigni abruzzesi. Ogni vino è dedicato alla famiglia e alla terra d'origine.",
    ettari: 320,
    fondazione: 1981,
    produzione: "2.500.000 bottiglie/anno"
  },
  {
    id: "emidio-pepe",
    nome: "Emidio Pepe",
    località: "Torano Nuovo (TE)",
    descrizione: "Produzione artigianale e biodinamica dal 1899",
    storia: "Quattro generazioni di viticoltori che seguono metodi ancestrali: vendemmia manuale, pigiatura a piedi, nessun uso di solfiti. Vini di straordinaria longevità e purezza.",
    immagine: emidioPepe,
    vini: ["Montepulciano d'Abruzzo", "Trebbiano d'Abruzzo"],
    filosofia: "Metodo artigianale ancestrale: vendemmia a mano, pigiatura a piedi nudi, nessun solfito aggiunto. Vini viventi che evolvono per decenni in bottiglia.",
    ettari: 15,
    fondazione: 1899,
    produzione: "50.000 bottiglie/anno"
  },
  {
    id: "valentini",
    nome: "Valentini",
    località: "Loreto Aprutino (PE)",
    descrizione: "Leggenda assoluta del vino abruzzese",
    storia: "Edoardo Valentini ha elevato il Trebbiano d'Abruzzo a vino di culto mondiale. Produzione limitatissima, selezione maniacale, risultati immortali.",
    immagine: valentini,
    vini: ["Trebbiano d'Abruzzo", "Montepulciano d'Abruzzo Cerasuolo"],
    filosofia: "Selezione estrema, rese bassissime, vinificazioni tradizionali. Solo le annate perfette vengono imbottigliate. Un culto mondiale per collezionisti.",
    ettari: 60,
    fondazione: 1650,
    produzione: "30.000 bottiglie/anno"
  },
  {
    id: "tiberio",
    nome: "Tiberio",
    località: "Cugnoli (PE)",
    descrizione: "Eleganza e finezza nei vini delle colline pescaresi",
    storia: "Cristiana Tiberio ha creato in pochi anni un punto di riferimento per l'alta qualità. Vigne coltivate con rispetto assoluto del territorio e vinificazioni impeccabili.",
    immagine: tiberio,
    vini: ["Pecorino Fonte Canale", "Trebbiano d'Abruzzo Colle Vota", "Montepulciano d'Abruzzo Riserva"],
    filosofia: "Viticoltura di precisione nelle colline pescaresi. Rispetto del terroir, vinificazioni in purezza, eleganza e finezza come obiettivo assoluto.",
    ettari: 35,
    fondazione: 2000,
    produzione: "120.000 bottiglie/anno"
  },
  {
    id: "torre-dei-beati",
    nome: "Torre dei Beati",
    località: "Loreto Aprutino (PE)",
    descrizione: "Viticoltura eroica tra gli ulivi secolari",
    storia: "Adriana Galasso e Fausto Albanesi hanno scommesso su terreni estremi e vitigni autoctoni rari, producendo vini di carattere indomabile e grande eleganza.",
    immagine: torreDeiBeati,
    vini: ["Montepulciano d'Abruzzo Cocciapazza", "Trebbiano d'Abruzzo Casauria", "Moscato Dolce Adriana"],
    filosofia: "Viticoltura eroica tra terreni argillosi e ulivi millenari. Vitigni rari, produzioni limitate, carattere selvaggio e indomabile in ogni bottiglia.",
    ettari: 12,
    fondazione: 2001,
    produzione: "40.000 bottiglie/anno"
  }
];
