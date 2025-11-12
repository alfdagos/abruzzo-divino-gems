import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Grape, BarChart3, ArrowLeft, Wine } from "lucide-react";
import { cantine } from "@/data/cantine";

const CantinaDetail = () => {
  const { id } = useParams();
  const cantina = cantine.find(c => c.id === id);

  if (!cantina) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-wine mb-4">Cantina non trovata</h1>
          <Link to="/cantine" className="text-gold hover:underline">
            Torna alle cantine
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero con immagine */}
      <section className="pt-20 relative">
        <div className="h-[60vh] relative overflow-hidden">
          <img
            src={cantina.immagine}
            alt={cantina.nome}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wine/90 via-wine/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Link
                to="/cantine"
                className="inline-flex items-center text-cream hover:text-gold transition-colors mb-4"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Torna alle cantine
              </Link>
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-cream mb-4 animate-fade-in">
                {cantina.nome}
              </h1>
              <div className="flex items-center text-gold text-xl">
                <MapPin className="h-6 w-6 mr-2" />
                <span className="font-semibold">{cantina.località}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Descrizione e storia */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-card text-center">
              <Calendar className="h-10 w-10 text-gold mx-auto mb-3" />
              <h3 className="font-playfair text-lg font-semibold text-wine mb-2">Fondazione</h3>
              <p className="text-2xl font-bold text-foreground">{cantina.fondazione}</p>
            </Card>
            <Card className="p-6 bg-card text-center">
              <Grape className="h-10 w-10 text-gold mx-auto mb-3" />
              <h3 className="font-playfair text-lg font-semibold text-wine mb-2">Ettari</h3>
              <p className="text-2xl font-bold text-foreground">{cantina.ettari} ha</p>
            </Card>
            <Card className="p-6 bg-card text-center">
              <BarChart3 className="h-10 w-10 text-gold mx-auto mb-3" />
              <h3 className="font-playfair text-lg font-semibold text-wine mb-2">Produzione</h3>
              <p className="text-2xl font-bold text-foreground">{cantina.produzione}</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-wine mb-6">La Storia</h2>
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                {cantina.storia}
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {cantina.descrizione}
              </p>
            </div>
            
            <div>
              <h2 className="font-playfair text-3xl font-bold text-wine mb-6">Filosofia</h2>
              <p className="text-foreground leading-relaxed mb-8 text-lg">
                {cantina.filosofia}
              </p>

              <div className="bg-cream/30 rounded-lg p-6">
                <h3 className="font-playfair text-2xl font-bold text-wine mb-4 flex items-center">
                  <Wine className="h-6 w-6 mr-3 text-gold" />
                  Vini Principali
                </h3>
                <ul className="space-y-3">
                  {cantina.vini.map((vino, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-gold mt-2 mr-3 flex-shrink-0" />
                      <span className="text-foreground font-medium">{vino}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Esperienze */}
      <section className="py-16 bg-gradient-to-b from-cream/30 to-background">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-wine mb-12 text-center">
            Esperienze in Cantina
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card hover-lift">
              <div className="bg-wine/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Wine className="h-8 w-8 text-wine" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-wine mb-3">
                Visita e Degustazione
              </h3>
              <p className="text-muted-foreground mb-4">
                Tour guidato della cantina con degustazione dei vini principali. Scopri i segreti della produzione.
              </p>
              <p className="text-gold font-semibold">Da €35/persona</p>
            </Card>
            
            <Card className="p-6 bg-card hover-lift">
              <div className="bg-wine/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Grape className="h-8 w-8 text-wine" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-wine mb-3">
                Esperienza in Vigna
              </h3>
              <p className="text-muted-foreground mb-4">
                Passeggiata tra i vigneti con spiegazione delle tecniche di coltivazione e degustazione all'aperto.
              </p>
              <p className="text-gold font-semibold">Da €50/persona</p>
            </Card>
            
            <Card className="p-6 bg-card hover-lift">
              <div className="bg-wine/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 text-wine" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-wine mb-3">
                Vertical Tasting
              </h3>
              <p className="text-muted-foreground mb-4">
                Degustazione verticale con diverse annate dello stesso vino. Un viaggio nel tempo attraverso il terroir.
              </p>
              <p className="text-gold font-semibold">Da €75/persona</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-wine to-wine-dark text-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-6">
            Prenota la Tua Esperienza
          </h2>
          <p className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
            Contattaci per prenotare una visita guidata e scoprire i nostri vini in un'esperienza indimenticabile
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contatti"
              className="bg-gold hover:bg-gold-dark text-wine px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Richiedi Informazioni
            </Link>
            <button className="bg-cream/10 hover:bg-cream/20 text-cream border border-cream px-8 py-4 rounded-md font-semibold text-lg transition-colors">
              Scarica la Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CantinaDetail;
