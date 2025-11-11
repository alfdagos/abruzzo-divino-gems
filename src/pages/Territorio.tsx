import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Mountain, Grape, MapPin, Sunrise } from "lucide-react";
import wineBottleImage from "@/assets/wine-bottle.jpg";

const Territorio = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-wine to-wine-dark text-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Territorio e Sapori
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto animate-fade-in-up">
            La terra dove nascono vini di straordinaria eleganza e carattere
          </p>
        </div>
      </section>

      {/* Introduzione */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-playfair text-4xl font-bold text-wine mb-6">
                Una Terra di Contrasti
              </h2>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                L'Abruzzo è l'unica regione italiana dove la montagna incontra il mare in così breve distanza.
                Dalle vette del Gran Sasso, che superano i 2.900 metri, alle dolci colline che degradano verso
                l'Adriatico, il territorio offre una straordinaria varietà di microclimi.
              </p>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                Questa unicità geografica si riflette nei vini: la ventilazione marina porta freschezza e 
                mineralità, mentre l'escursione termica tra giorno e notte, amplificata dalla vicinanza 
                delle montagne, regala complessità aromatica e struttura.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                I vitigni autoctoni - Montepulciano, Trebbiano, Pecorino, Passerina - hanno trovato qui
                le condizioni ideali per esprimere la loro massima qualità.
              </p>
            </div>
            <div className="relative animate-scale-in">
              <img
                src={wineBottleImage}
                alt="Vino abruzzese"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Caratteristiche del Territorio */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-wine text-center mb-12">
            Le Chiavi del Successo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover-lift">
              <Mountain className="h-16 w-16 text-wine mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-bold text-wine mb-3">
                Il Gran Sasso
              </h3>
              <p className="text-muted-foreground text-sm">
                La presenza del massiccio crea escursioni termiche ideali per la maturazione
                delle uve, preservando acidità e freschezza
              </p>
            </Card>

            <Card className="p-6 text-center hover-lift">
              <Sunrise className="h-16 w-16 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-bold text-wine mb-3">
                Esposizione
              </h3>
              <p className="text-muted-foreground text-sm">
                Le vigne a 300-500 metri s.l.m., esposte a sud-est, ricevono luce ottimale
                e beneficiano delle brezze adriatiche
              </p>
            </Card>

            <Card className="p-6 text-center hover-lift">
              <MapPin className="h-16 w-16 text-wine mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-bold text-wine mb-3">
                Terroir Unico
              </h3>
              <p className="text-muted-foreground text-sm">
                Suoli calcarei e argillosi, ricchi di minerali, conferiscono ai vini
                struttura, mineralità e grande longevità
              </p>
            </Card>

            <Card className="p-6 text-center hover-lift">
              <Grape className="h-16 w-16 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-bold text-wine mb-3">
                Vitigni Autoctoni
              </h3>
              <p className="text-muted-foreground text-sm">
                Varietà uniche, coltivate da secoli, perfettamente adattate al territorio
                e capaci di esprimerne l'autenticità
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Le Zone Vinicole */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-wine text-center mb-12">
            Le Zone Vinicole d'Eccellenza
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <Card className="p-8 hover-lift">
              <h3 className="font-playfair text-2xl font-bold text-wine mb-3">
                Colline Teramane
              </h3>
              <p className="text-foreground mb-4">
                La DOCG Montepulciano d'Abruzzo Colline Teramane rappresenta il vertice qualitativo
                della produzione di rossi. Vini potenti, strutturati, di grande longevità.
              </p>
              <p className="text-sm text-muted-foreground">
                Comuni principali: Controguerra, Torano Nuovo, Civitella del Tronto
              </p>
            </Card>

            <Card className="p-8 hover-lift">
              <h3 className="font-playfair text-2xl font-bold text-wine mb-3">
                Loreto Aprutino e dintorni
              </h3>
              <p className="text-foreground mb-4">
                Zona storica per il Trebbiano d'Abruzzo Superiore. Qui operano cantine leggendarie
                come Valentini e Torre dei Beati, su terreni calcarei tra gli ulivi secolari.
              </p>
              <p className="text-sm text-muted-foreground">
                Caratteristiche: altitudine 200-400m, viticoltura eroica, vini di culto
              </p>
            </Card>

            <Card className="p-8 hover-lift">
              <h3 className="font-playfair text-2xl font-bold text-wine mb-3">
                Valle Peligna
              </h3>
              <p className="text-foreground mb-4">
                Protetta dal Gran Sasso e dalla Majella, questa valle gode di un microclima unico.
                Casa di Valle Reale e altri produttori biologici di alto livello.
              </p>
              <p className="text-sm text-muted-foreground">
                Comuni principali: Popoli, Pratola Peligna, Sulmona
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Sapori del Territorio */}
      <section className="py-16 bg-wine text-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12">
            I Sapori dell'Abruzzo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { nome: "Arrosticini", descrizione: "Spiedini di pecora cotti alla brace, simbolo assoluto della gastronomia abruzzese" },
              { nome: "Ventricina Teramana", descrizione: "Salume artigianale piccante, perfetto con i vini rossi strutturati" },
              { nome: "Pecorino Stagionato", descrizione: "Formaggio di pecora invecchiato, ideale con Montepulciano Riserva" },
              { nome: "Brodetto alla Vastese", descrizione: "Zuppa di pesce dell'Adriatico, abbinamento perfetto per bianchi minerali" },
              { nome: "Pallotte Cace e Ove", descrizione: "Polpette di formaggio e uova in sugo di pomodoro" },
              { nome: "Confettura di Mosto", descrizione: "Dolce tipico preparato con mosto d'uva concentrato" }
            ].map((prodotto, i) => (
              <Card key={i} className="p-6 bg-cream/10 border-cream/20 hover-lift">
                <h3 className="font-playfair text-xl font-bold text-gold mb-2">
                  {prodotto.nome}
                </h3>
                <p className="text-cream/80 text-sm">
                  {prodotto.descrizione}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Territorio;
