import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Blog = () => {
  const [filtroCategoria, setFiltroCategoria] = useState<string | null>(null);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  const postiFiltrati = filtroCategoria
    ? blogPosts.filter(post => post.categoria === filtroCategoria)
    : blogPosts;

  const categorie = ["Territorio", "Degustazione", "Cultura"];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-wine to-wine-dark text-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className={`font-playfair text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Blog Abruzzo diVino
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto animate-fade-in-up">
            Storie, guide e approfondimenti sul mondo del vino abruzzese
          </p>
        </div>
      </section>

      {/* Filtri */}
      <section className="py-8 bg-cream/30 border-b border-wine/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setFiltroCategoria(null)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filtroCategoria === null
                  ? "bg-wine text-cream"
                  : "bg-cream text-wine hover:bg-wine/10"
              }`}
            >
              Tutti
            </button>
            {categorie.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltroCategoria(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filtroCategoria === cat
                    ? "bg-wine text-cream"
                    : "bg-cream text-wine hover:bg-wine/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articoli */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postiFiltrati.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card
                  className="overflow-hidden hover-lift bg-card group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                <div className="aspect-[16/9] bg-gradient-to-br from-wine/10 to-wine/5 overflow-hidden">
                  <img
                    src={post.immagine}
                    alt={post.titolo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      variant={
                        post.categoria === "Territorio"
                          ? "default"
                          : post.categoria === "Degustazione"
                          ? "secondary"
                          : "outline"
                      }
                      className="font-semibold"
                    >
                      {post.categoria}
                    </Badge>
                  </div>
                  
                  <h2 className="font-playfair text-xl font-bold text-wine mb-3 group-hover:text-wine-dark transition-colors">
                    {post.titolo}
                  </h2>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.estratto}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-2 text-gold" />
                      <span>{new Date(post.data).toLocaleDateString('it-IT', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <User className="h-3 w-3 mr-2 text-gold" />
                      <span>{post.autore}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 mb-4">
                    <Tag className="h-3 w-3 mt-0.5 text-gold flex-shrink-0" />
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-wine/70">
                          #{tag}
                          {i < post.tags.length - 1 && " "}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-wine hover:bg-wine-dark text-cream py-2 rounded-md transition-colors font-semibold text-sm">
                    Leggi l'articolo
                  </button>
                </div>
              </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-wine to-wine-dark text-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Non Perdere i Nostri Articoli
          </h2>
          <p className="text-lg text-cream/90 mb-8 max-w-2xl mx-auto">
            Iscriviti alla newsletter per ricevere storie, guide e approfondimenti sul vino abruzzese
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="La tua email"
              className="flex-1 px-4 py-3 rounded-md text-wine focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button className="bg-gold hover:bg-gold-dark text-wine px-6 py-3 rounded-md font-semibold transition-colors">
              Iscriviti
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
