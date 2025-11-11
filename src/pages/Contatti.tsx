import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contatti = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    messaggio: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    toast.success("Messaggio inviato con successo! Ti risponderemo al più presto.");
    setFormData({ nome: "", email: "", telefono: "", messaggio: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-wine to-wine-dark text-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Contattaci
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto animate-fade-in-up">
            Siamo qui per rispondere a ogni tua domanda
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 hover-lift">
                <Mail className="h-12 w-12 text-wine mb-4" />
                <h3 className="font-playfair text-xl font-bold text-wine mb-2">
                  Email
                </h3>
                <a 
                  href="mailto:info@abruzzodiVino.it"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  info@abruzzodiVino.it
                </a>
              </Card>

              <Card className="p-6 hover-lift">
                <Phone className="h-12 w-12 text-gold mb-4" />
                <h3 className="font-playfair text-xl font-bold text-wine mb-2">
                  Telefono
                </h3>
                <a 
                  href="tel:+390861123456"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  +39 0861 123456
                </a>
              </Card>

              <Card className="p-6 hover-lift">
                <MapPin className="h-12 w-12 text-wine mb-4" />
                <h3 className="font-playfair text-xl font-bold text-wine mb-2">
                  Sede
                </h3>
                <p className="text-muted-foreground">
                  Via del Vino 1<br />
                  65100 Pescara<br />
                  Abruzzo, Italia
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="font-playfair text-3xl font-bold text-wine mb-6">
                  Inviaci un Messaggio
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block font-semibold text-wine mb-2">
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-wine/20 rounded-lg focus:border-gold focus:outline-none transition-colors"
                      placeholder="Mario Rossi"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-semibold text-wine mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-wine/20 rounded-lg focus:border-gold focus:outline-none transition-colors"
                      placeholder="mario.rossi@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block font-semibold text-wine mb-2">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-wine/20 rounded-lg focus:border-gold focus:outline-none transition-colors"
                      placeholder="+39 123 456 7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="messaggio" className="block font-semibold text-wine mb-2">
                      Messaggio *
                    </label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      value={formData.messaggio}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-wine/20 rounded-lg focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Scrivi qui il tuo messaggio..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-wine hover:bg-wine-dark text-cream font-semibold"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Invia Messaggio
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Campi obbligatori
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-wine text-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Orari di Apertura
          </h2>
          <div className="max-w-md mx-auto space-y-3 text-lg">
            <div className="flex justify-between">
              <span>Lunedì - Venerdì</span>
              <span className="text-gold">09:00 - 18:00</span>
            </div>
            <div className="flex justify-between">
              <span>Sabato</span>
              <span className="text-gold">10:00 - 14:00</span>
            </div>
            <div className="flex justify-between">
              <span>Domenica</span>
              <span className="text-gold-light">Chiuso</span>
            </div>
          </div>
          <p className="mt-8 text-cream/80">
            Per visite in cantina e degustazioni è consigliata la prenotazione
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contatti;
