import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Mountain, Grape, MapPin, Sunrise, Waves, Ship } from "lucide-react";
import wineBottleImage from "@/assets/wine-bottle.jpg";
import costaTrabocchiImage from "@/assets/costa-trabocchi.jpg";
import granSassoImage from "@/assets/gran-sasso.jpg";

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

      {/* Costa dei Trabocchi - Mare */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <img
                src={costaTrabocchiImage}
                alt="Costa dei Trabocchi"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Waves className="h-10 w-10 text-wine" />
                <h2 className="font-playfair text-4xl font-bold text-wine">
                  La Costa dei Trabocchi
                </h2>
              </div>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                La Costa dei Trabocchi è un tratto di litorale adriatico unico al mondo, che si estende 
                da Ortona a San Salvo. Il suo nome deriva dai <strong>trabocchi</strong>, antiche 
                macchine da pesca su palafitte costruite interamente in legno che si protendono sul mare.
              </p>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                Questi monumenti dell'ingegno marinaro, descritti da Gabriele D'Annunzio come 
                "ragni colossali", sono diventati oggi anche ristoranti raffinati dove degustare 
                il pesce freschissimo dell'Adriatico abbinato ai grandi bianchi abruzzesi.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                La vicinanza del mare porta alle vigne quella <strong>brezza salmastra e 
                mineralità</strong> che caratterizzano vini come il Trebbiano e il Pecorino, 
                regalando loro freschezza e sapidità uniche. La ventilazione costante mitiga 
                il clima estivo e preserva l'acidità delle uve.
              </p>
              <Card className="p-6 bg-cream border-wine/20">
                <h3 className="font-playfair text-xl font-bold text-wine mb-3 flex items-center gap-2">
                  <Ship className="h-6 w-6" />
                  Tradizione marinara e vino
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Il brodetto di pesce alla vastese, piatto principe della costa, trova 
                  l'abbinamento perfetto con Trebbiano d'Abruzzo e Pecorino: vini che 
                  nascono proprio sotto l'influenza di questo mare e ne portano l'impronta 
                  salina nel calice.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gran Sasso - Montagna */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Mountain className="h-10 w-10 text-wine" />
                <h2 className="font-playfair text-4xl font-bold text-wine">
                  Il Gran Sasso d'Italia
                </h2>
              </div>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                Con i suoi <strong>2.912 metri del Corno Grande</strong>, il Gran Sasso è la 
                vetta più alta degli Appennini e il cuore pulsante dell'Abruzzo. Questa imponente 
                catena montuosa non è solo uno spettacolo naturale mozzafiato, ma il vero artefice 
                della qualità dei vini abruzzesi.
              </p>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                Le sue <strong>escursioni termiche</strong> - con notti fresche anche in piena 
                estate e giornate soleggiate - sono il segreto della complessità aromatica dei 
                grandi Montepulciano. Il freddo notturno preserva acidità e freschezza, mentre 
                il sole delle colline sottostanti garantisce perfetta maturazione fenolica.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Le vigne piantate tra i <strong>300 e i 600 metri</strong> alle pendici del massiccio 
                godono di un microclima unico: aria purissima, suoli poveri e pietrosi che costringono 
                le radici a scavare in profondità, estraendo mineralità e complessità dal terreno calcareo.
              </p>
              <Card className="p-6 bg-background border-wine/20">
                <h3 className="font-playfair text-xl font-bold text-wine mb-3">
                  L'altitudine fa la differenza
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  La Valle Peligna, protetta dal Gran Sasso e dalla Majella, ospita alcune delle 
                  vigne più alte d'Abruzzo. Qui nascono vini di straordinaria eleganza e longevità, 
                  come il San Calisto di Valle Reale.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  La presenza della montagna regala anche <strong>acqua purissima</strong> dai 
                  ghiacciai perenni, elemento fondamentale per la viticoltura di qualità e per 
                  una delle tradizioni pastorali più antiche d'Italia.
                </p>
              </Card>
            </div>
            <div>
              <img
                src={granSassoImage}
                alt="Gran Sasso d'Italia"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sapori del Territorio */}
      <section className="py-16 bg-wine text-cream">...
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
