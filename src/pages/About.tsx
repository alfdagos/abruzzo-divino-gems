import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Heart, Target, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-wine to-wine-dark text-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Chi Siamo
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto animate-fade-in-up">
            La nostra passione per l'eccellenza enogastronomica abruzzese
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-wine mb-6">
              La Nostra Mission
            </h2>
            <p className="text-xl text-foreground leading-relaxed mb-6">
              <span className="font-playfair italic text-2xl text-gold">"Abruzzo diVino"</span> nasce 
              dalla volontà di valorizzare e promuovere le eccellenze enogastronomiche abruzzesi, 
              creando un ponte tra i grandi produttori del territorio e gli appassionati di vino in tutto il mondo.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Crediamo che il vino abruzzese meriti un posto d'onore sulla scena internazionale. 
              La nostra missione è raccontare le storie di passione, tradizione e innovazione che 
              stanno dietro ogni bottiglia, ogni cantina, ogni vigneto di questa straordinaria regione.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center hover-lift">
              <Heart className="h-16 w-16 text-wine mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-bold text-wine mb-3">
                Passione
              </h3>
              <p className="text-muted-foreground">
                Amore profondo per il territorio e le sue tradizioni enologiche
              </p>
            </Card>

            <Card className="p-8 text-center hover-lift">
              <Target className="h-16 w-16 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-bold text-wine mb-3">
                Eccellenza
              </h3>
              <p className="text-muted-foreground">
                Selezioniamo solo i migliori produttori e le etichette di massima qualità
              </p>
            </Card>

            <Card className="p-8 text-center hover-lift">
              <Award className="h-16 w-16 text-wine mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-bold text-wine mb-3">
                Autenticità
              </h3>
              <p className="text-muted-foreground">
                Raccontiamo storie vere di produttori che credono nel proprio lavoro
              </p>
            </Card>

            <Card className="p-8 text-center hover-lift">
              <Users className="h-16 w-16 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-bold text-wine mb-3">
                Comunità
              </h3>
              <p className="text-muted-foreground">
                Creiamo connessioni tra produttori, sommelier e appassionati
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Visione */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold text-wine text-center mb-12">
              La Nostra Visione
            </h2>
            
            <div className="space-y-8">
              <Card className="p-8 hover-lift">
                <h3 className="font-playfair text-2xl font-bold text-wine mb-4">
                  Luxury Winery Experience
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Vogliamo elevare l'esperienza del vino abruzzese a un livello di lusso e raffinatezza 
                  paragonabile alle più celebri regioni vinicole mondiali. Ogni bottiglia racconta una 
                  storia di eccellenza, ogni degustazione diventa un momento indimenticabile.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Organizziamo eventi esclusivi, visite in cantina personalizzate, degustazioni verticali 
                  di annate storiche e masterclass con i più grandi enologi della regione.
                </p>
              </Card>

              <Card className="p-8 hover-lift">
                <h3 className="font-playfair text-2xl font-bold text-wine mb-4">
                  Divulgazione di Qualità
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Crediamo nell'importanza della formazione e della corretta informazione. Attraverso 
                  articoli approfonditi, video interviste e podcast, raccontiamo il territorio, i vitigni 
                  autoctoni, le tecniche di vinificazione e le filosofie produttive.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Il nostro obiettivo è rendere accessibile a tutti la conoscenza del vino abruzzese, 
                  dalla storia millenaria alle innovazioni più recenti.
                </p>
              </Card>

              <Card className="p-8 hover-lift">
                <h3 className="font-playfair text-2xl font-bold text-wine mb-4">
                  Sostenibilità e Tradizione
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Sosteniamo i produttori che praticano viticoltura biologica, biodinamica o comunque 
                  rispettosa dell'ambiente. La qualità del vino nasce dalla salute del territorio.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Promuoviamo pratiche sostenibili che preservino il patrimonio viticolo per le 
                  generazioni future, valorizzando al contempo tecniche tradizionali e saperi antichi.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-wine text-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-playfair text-3xl md:text-4xl italic font-light mb-8 leading-relaxed">
              "Il vino è la poesia della terra, e l'Abruzzo è un poeta che ancora ha molto da raccontare"
            </blockquote>
            <p className="text-gold-light text-xl">
              — La filosofia di Abruzzo diVino
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
