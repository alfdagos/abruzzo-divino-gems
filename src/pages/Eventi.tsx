import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";

interface Evento {
  id: string;
  titolo: string;
  data: string;
  luogo: string;
  orario: string;
  descrizione: string;
  tipo: "Degustazione" | "Festival" | "Workshop" | "Visita";
}

const eventi: Evento[] = [
  {
    id: "1",
    titolo: "Degustazione Verticale Montepulciano",
    data: "15 Dicembre 2025",
    luogo: "Tenuta Valle Reale, Popoli",
    orario: "18:00 - 21:00",
    descrizione: "Un viaggio attraverso 10 annate di Montepulciano d'Abruzzo, dalla giovinezza alla piena maturità. Degustazione guidata dal sommelier e incontro con il produttore.",
    tipo: "Degustazione"
  },
  {
    id: "2",
    titolo: "Festival del Vino Abruzzese",
    data: "20-22 Dicembre 2025",
    luogo: "Loreto Aprutino",
    orario: "10:00 - 20:00",
    descrizione: "Tre giorni dedicati alle eccellenze enologiche abruzzesi. Degustazioni, masterclass, showcooking con chef stellati e produttori locali.",
    tipo: "Festival"
  },
  {
    id: "3",
    titolo: "Workshop: L'Arte del Blend",
    data: "10 Gennaio 2026",
    luogo: "Masciarelli, San Martino",
    orario: "15:00 - 18:00",
    descrizione: "Impara a creare il tuo blend personalizzato sotto la guida dell'enologo. Include visita in cantina e degustazione delle cuvée storiche.",
    tipo: "Workshop"
  },
  {
    id: "4",
    titolo: "Visita in Vigna e Vendemmia",
    data: "25 Settembre 2026",
    luogo: "Torre dei Beati, Loreto Aprutino",
    orario: "09:00 - 13:00",
    descrizione: "Esperienza immersiva nella vendemmia tradizionale. Raccolta manuale delle uve, pigiatura e pranzo tra i filari con prodotti tipici.",
    tipo: "Visita"
  },
  {
    id: "5",
    titolo: "Trebbiano d'Abruzzo: Il Grande Bianco",
    data: "15 Febbraio 2026",
    luogo: "Tiberio, Cugnoli",
    orario: "17:00 - 20:00",
    descrizione: "Masterclass dedicata al Trebbiano d'Abruzzo e alla sua evoluzione. Degustazione di annate storiche e confronto con grandi bianchi internazionali.",
    tipo: "Degustazione"
  },
  {
    id: "6",
    titolo: "Cena di Gala in Cantina",
    data: "14 Febbraio 2026",
    luogo: "Emidio Pepe, Torano Nuovo",
    orario: "19:30 - 23:00",
    descrizione: "Cena esclusiva di San Valentino nelle storiche cantine Emidio Pepe. Menu degustazione 5 portate con abbinamenti di vini d'annata.",
    tipo: "Degustazione"
  }
];

const Eventi = () => {
  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case "Degustazione": return "bg-wine text-cream";
      case "Festival": return "bg-gold text-wine";
      case "Workshop": return "bg-wine-light text-cream";
      case "Visita": return "bg-gold-light text-wine";
      default: return "bg-wine text-cream";
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-wine to-wine-dark text-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Eventi e Degustazioni
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto animate-fade-in-up">
            Esperienze esclusive nel mondo del vino abruzzese
          </p>
        </div>
      </section>

      {/* Eventi List */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="space-y-6 max-w-4xl mx-auto">
            {eventi.map((evento, index) => (
              <Card
                key={evento.id}
                className="overflow-hidden hover-lift bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h2 className="font-playfair text-3xl font-bold text-wine mb-2">
                        {evento.titolo}
                      </h2>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getTipoColor(evento.tipo)}`}>
                        {evento.tipo}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-foreground">
                      <Calendar className="h-5 w-5 mr-3 text-gold flex-shrink-0" />
                      <span className="font-semibold">{evento.data}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-5 w-5 mr-3 text-gold flex-shrink-0" />
                      <span>{evento.luogo}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-5 w-5 mr-3 text-gold flex-shrink-0" />
                      <span>{evento.orario}</span>
                    </div>
                  </div>

                  <p className="text-foreground leading-relaxed mb-6">
                    {evento.descrizione}
                  </p>

                  <div className="flex gap-4">
                    <button className="px-6 py-2 bg-wine hover:bg-wine-dark text-cream rounded-lg font-semibold transition-colors">
                      Prenota Ora
                    </button>
                    <button className="px-6 py-2 border-2 border-wine text-wine hover:bg-wine hover:text-cream rounded-lg font-semibold transition-colors">
                      Info
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="py-16 bg-wine text-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Non Perdere i Prossimi Eventi
          </h2>
          <p className="text-lg text-cream/90 mb-8 max-w-2xl mx-auto">
            Iscriviti alla newsletter per ricevere in anteprima le date dei prossimi eventi,
            degustazioni esclusive e workshop enologici
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="La tua email"
              className="flex-1 px-6 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gold hover:bg-gold-light text-wine font-semibold rounded-lg transition-colors"
            >
              Iscriviti
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Eventi;
