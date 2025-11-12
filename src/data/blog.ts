export interface BlogPost {
  id: number;
  titolo: string;
  categoria: 'Territorio' | 'Degustazione' | 'Cultura';
  data: string;
  autore: string;
  immagine: string;
  estratto: string;
  contenuto: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    titolo: "I Terroir del Montepulciano d'Abruzzo: dalla Costa ai Monti",
    categoria: "Territorio",
    data: "2024-03-15",
    autore: "Maria Rossi",
    immagine: "/placeholder.svg",
    estratto: "Un viaggio attraverso i microclimi che rendono unico il Montepulciano d'Abruzzo, dalle colline teramane alle pendici della Majella.",
    contenuto: "Il Montepulciano d'Abruzzo rappresenta l'essenza del territorio abruzzese, un vitigno che sa interpretare in modo sublime le diverse caratteristiche pedoclimatiche della regione. Dalle colline teramane, dove il vino acquisisce eleganza e finezza grazie all'influenza del mare Adriatico, fino alle pendici della Majella, dove le escursioni termiche donano struttura e complessità aromatica.",
    tags: ["Montepulciano", "Terroir", "Territorio"]
  },
  {
    id: 2,
    titolo: "Guida alla Degustazione: Come Riconoscere un Grande Montepulciano",
    categoria: "Degustazione",
    data: "2024-03-10",
    autore: "Luca Bianchi",
    immagine: "/placeholder.svg",
    estratto: "Scopri i segreti per valutare colore, profumo e gusto di uno dei vini rossi più rappresentativi d'Italia.",
    contenuto: "La degustazione di un Montepulciano d'Abruzzo di qualità inizia dall'analisi visiva: il colore deve essere rubino intenso, tendente al granato con l'invecchiamento. Al naso, cercate note di frutti rossi maturi, prugna, spezie dolci e, nei vini più strutturati, sentori di tabacco e cuoio. In bocca, il tannino deve essere presente ma vellutato, mai aggressivo, con un finale persistente che richiama i profumi percepiti all'olfatto.",
    tags: ["Degustazione", "Montepulciano", "Guida"]
  },
  {
    id: 3,
    titolo: "Trebbiano d'Abruzzo: Il Bianco Sottovalutato che Merita Attenzione",
    categoria: "Territorio",
    data: "2024-03-05",
    autore: "Giovanni Verde",
    immagine: "/placeholder.svg",
    estratto: "Riscopriamo insieme un vitigno autoctono capace di dare vini bianchi di straordinaria mineralità e longevità.",
    contenuto: "Il Trebbiano d'Abruzzo DOC ha vissuto una rinascita straordinaria negli ultimi anni. Produttori visionari hanno dimostrato che, lavorato con attenzione in vigna e in cantina, questo vitigno può dare vini di grande personalità. La mineralità derivante dai terreni calcarei, la freschezza garantita dall'altitudine e la capacità di invecchiamento lo rendono un bianco di assoluto valore.",
    tags: ["Trebbiano", "Vini Bianchi", "DOC"]
  },
  {
    id: 4,
    titolo: "Le Tecniche di Vinificazione Tradizionali dell'Abruzzo",
    categoria: "Cultura",
    data: "2024-02-28",
    autore: "Anna Neri",
    immagine: "/placeholder.svg",
    estratto: "Dalle antiche pratiche contadine alle moderne interpretazioni: come si è evoluta la vinificazione abruzzese.",
    contenuto: "La tradizione enologica abruzzese affonda le radici in pratiche millenarie. La vinificazione in tini di legno, la macerazione prolungata sulle bucce, l'affinamento in grandi botti di rovere: tecniche che molte cantine hanno saputo preservare e modernizzare. Oggi assistiamo a un interessante dialogo tra tradizione e innovazione, dove il rispetto del territorio si coniuga con le moderne conoscenze enologiche.",
    tags: ["Vinificazione", "Tradizione", "Cultura"]
  },
  {
    id: 5,
    titolo: "Pecorino e Passerina: I Bianchi Emergenti dell'Abruzzo",
    categoria: "Degustazione",
    data: "2024-02-20",
    autore: "Marco Gialli",
    immagine: "/placeholder.svg",
    estratto: "Due vitigni autoctoni che stanno conquistando gli appassionati con la loro freschezza aromatica e versatilità.",
    contenuto: "Il Pecorino e la Passerina rappresentano la nuova frontiera dei vini bianchi abruzzesi. Il Pecorino offre note intense di fiori bianchi, agrumi e una piacevole sapidità minerale, perfetto per il pesce dell'Adriatico. La Passerina seduce con la sua eleganza floreale e fruttata, ideale anche per bollicine di qualità. Entrambi esprimono al meglio la vocazione dell'Abruzzo per i grandi vini bianchi.",
    tags: ["Pecorino", "Passerina", "Vini Bianchi"]
  },
  {
    id: 6,
    titolo: "Abbinamenti Perfetti: Montepulciano e la Cucina Abruzzese",
    categoria: "Degustazione",
    data: "2024-02-15",
    autore: "Sofia Rossi",
    immagine: "/placeholder.svg",
    estratto: "Dal brodetto alle arrosticini: gli abbinamenti classici e innovativi per esaltare il Montepulciano.",
    contenuto: "Gli arrosticini di pecora trovano nel Montepulciano d'Abruzzo il compagno ideale: la sapidità della carne e il grasso si bilanciano perfettamente con i tannini del vino. Il brodetto vastese richiede un Montepulciano giovane e fruttato, mentre i timballi e i primi piatti ricchi si esaltano con vini più strutturati e affinati. Non dimenticate gli abbinamenti con i formaggi pecorini stagionati.",
    tags: ["Abbinamenti", "Cucina", "Montepulciano"]
  }
];
