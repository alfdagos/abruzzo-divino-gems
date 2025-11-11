import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Wine, Thermometer } from "lucide-react";
import { vini } from "@/data/vini";

const Vini = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-wine to-wine-dark text-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Vini Iconici
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto animate-fade-in-up">
            Le etichette che hanno scritto la storia dell'enologia abruzzese nel mondo
          </p>
        </div>
      </section>

      {/* Vini Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vini.map((vino, index) => (
              <Card
                key={vino.id}
                className="overflow-hidden hover-lift bg-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[3/4] bg-gradient-to-b from-wine/5 to-wine/10 relative flex items-center justify-center">
                  <Wine className="h-40 w-40 text-wine/20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      vino.tipologia === 'Rosso' ? 'bg-wine text-cream' :
                      vino.tipologia === 'Bianco' ? 'bg-gold text-wine' :
                      vino.tipologia === 'Rosato' ? 'bg-wine-light text-cream' :
                      'bg-wine-dark text-cream'
                    }`}>
                      {vino.tipologia}
                    </span>
                    {vino.annata && (
                      <span className="px-3 py-1 bg-cream/90 text-wine rounded-full text-xs font-bold">
                        {vino.annata}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-playfair text-2xl font-bold text-wine mb-1">
                    {vino.nome}
                  </h2>
                  <p className="text-gold font-semibold mb-3">
                    {vino.cantina}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    {vino.vitigno}
                  </p>
                  <p className="text-foreground mb-4 text-sm leading-relaxed">
                    {vino.descrizione}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <h3 className="font-playfair font-semibold text-wine text-sm mb-1">Vista</h3>
                      <p className="text-xs text-muted-foreground">{vino.noteDiDegustazione.vista}</p>
                    </div>
                    <div>
                      <h3 className="font-playfair font-semibold text-wine text-sm mb-1">Olfatto</h3>
                      <p className="text-xs text-muted-foreground">{vino.noteDiDegustazione.olfatto}</p>
                    </div>
                    <div>
                      <h3 className="font-playfair font-semibold text-wine text-sm mb-1">Gusto</h3>
                      <p className="text-xs text-muted-foreground">{vino.noteDiDegustazione.gusto}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-playfair font-semibold text-wine text-sm mb-2">Abbinamenti</h3>
                    <div className="flex flex-wrap gap-2">
                      {vino.abbinamenti.slice(0, 3).map((abbinamento, i) => (
                        <span key={i} className="text-xs bg-cream px-2 py-1 rounded-full text-wine">
                          {abbinamento}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground">
                    <Thermometer className="h-4 w-4 mr-2 text-gold" />
                    <span>Servire a {vino.temperatura}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vini;
