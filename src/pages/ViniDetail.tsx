import { useParams, Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { vini } from "@/data/vini";
import { ArrowLeft, Thermometer, Wine, Star, MapPin } from "lucide-react";

const ViniDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const vino = vini.find((v) => v.id === id);

  if (!vino) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Vino non trovato</h1>
          <Link to="/vini">
            <Button>Torna ai vini</Button>
          </Link>
        </div>
      </div>
    );
  }

  const recensioni = [
    {
      autore: "James Suckling",
      voto: 95,
      testo: "Un vino straordinario che esprime al meglio il terroir abruzzese. Note complesse e persistenti che raccontano la passione dei produttori.",
      data: "2024"
    },
    {
      autore: "Wine Spectator",
      voto: 93,
      testo: "Eleganza e potenza si fondono in un equilibrio perfetto. Un'eccellenza dell'enologia italiana che merita una degustazione attenta.",
      data: "2024"
    },
    {
      autore: "Gambero Rosso",
      voto: "3 Bicchieri",
      testo: "La quintessenza della tradizione vitivinicola abruzzese. Un vino che sa emozionare e sorprendere ad ogni sorso.",
      data: "2024"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-24">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Torna indietro
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-wine/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-b from-wine/10 to-wine/5 rounded-lg overflow-hidden">
                <img 
                  src={vino.immagine} 
                  alt={`${vino.nome} - ${vino.cantina}`}
                  className="w-full h-full object-contain p-12"
                />
              </div>
              <div className="absolute top-6 left-6">
                <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                  vino.tipologia === 'Rosso' ? 'bg-wine text-cream' :
                  vino.tipologia === 'Bianco' ? 'bg-gold text-wine' :
                  vino.tipologia === 'Rosato' ? 'bg-wine-light text-cream' :
                  'bg-wine-dark text-cream'
                }`}>
                  {vino.tipologia}
                </span>
              </div>
              {vino.annata && (
                <div className="absolute top-6 right-6">
                  <span className="px-4 py-2 bg-cream/95 text-wine rounded-full text-sm font-bold">
                    {vino.annata}
                  </span>
                </div>
              )}
            </div>

            <div>
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-wine mb-4">
                {vino.nome}
              </h1>
              <p className="text-2xl text-gold font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                {vino.cantina}
              </p>
              <p className="text-xl text-muted-foreground mb-6 italic">
                {vino.vitigno}
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                {vino.descrizione}
              </p>
              
              <div className="flex items-center gap-4 text-wine">
                <div className="flex items-center">
                  <Thermometer className="h-5 w-5 mr-2 text-gold" />
                  <span className="font-semibold">Servire a {vino.temperatura}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note di Degustazione */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-wine mb-8 text-center">
            Note di Degustazione
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-card hover-lift">
              <div className="w-16 h-16 rounded-full bg-wine/10 flex items-center justify-center mb-4 mx-auto">
                <Wine className="h-8 w-8 text-wine" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-wine mb-4 text-center">Vista</h3>
              <p className="text-foreground leading-relaxed text-center">
                {vino.noteDiDegustazione.vista}
              </p>
            </Card>
            
            <Card className="p-8 bg-card hover-lift">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4 mx-auto">
                <Wine className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-wine mb-4 text-center">Olfatto</h3>
              <p className="text-foreground leading-relaxed text-center">
                {vino.noteDiDegustazione.olfatto}
              </p>
            </Card>
            
            <Card className="p-8 bg-card hover-lift">
              <div className="w-16 h-16 rounded-full bg-wine-light/10 flex items-center justify-center mb-4 mx-auto">
                <Wine className="h-8 w-8 text-wine-dark" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-wine mb-4 text-center">Gusto</h3>
              <p className="text-foreground leading-relaxed text-center">
                {vino.noteDiDegustazione.gusto}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Abbinamenti */}
      <section className="py-16 bg-gradient-to-b from-wine/5 to-background">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-wine mb-8 text-center">
            Abbinamenti Consigliati
          </h2>
          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {vino.abbinamenti.map((abbinamento, index) => (
              <Card key={index} className="px-6 py-4 bg-cream hover-lift">
                <p className="text-wine font-semibold text-lg">{abbinamento}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recensioni */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-wine mb-12 text-center">
            Recensioni
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {recensioni.map((recensione, index) => (
              <Card key={index} className="p-6 bg-card hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-xl font-bold text-wine">
                    {recensione.autore}
                  </h3>
                  <div className="flex items-center gap-1">
                    {typeof recensione.voto === 'number' ? (
                      <>
                        <Star className="h-5 w-5 fill-gold text-gold" />
                        <span className="font-bold text-gold">{recensione.voto}</span>
                      </>
                    ) : (
                      <span className="font-bold text-wine">{recensione.voto}</span>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground mb-3 leading-relaxed italic">
                  "{recensione.testo}"
                </p>
                <p className="text-sm text-muted-foreground">
                  {recensione.data}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-wine to-wine-dark text-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-6">
            Scopri Altri Vini d'Abruzzo
          </h2>
          <p className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
            Esplora la nostra selezione completa di vini iconici della regione
          </p>
          <Link to="/vini">
            <Button size="lg" variant="secondary" className="hover-scale">
              Vedi tutti i vini
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ViniDetail;
