import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, User, Tag, ArrowLeft, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-playfair text-4xl font-bold text-wine mb-4">Articolo non trovato</h1>
          <Link to="/blog" className="text-wine hover:text-wine-dark underline">
            Torna al Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const altriArticoli = blogPosts
    .filter(p => p.id !== post.id && p.categoria === post.categoria)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero con immagine */}
      <section className="pt-24 pb-0">
        <div className="container mx-auto px-4">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-wine hover:text-wine-dark mb-6 font-semibold transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Torna al Blog
          </Link>
        </div>
      </section>

      <article className="pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-8">
            <Badge
              variant={
                post.categoria === "Territorio"
                  ? "default"
                  : post.categoria === "Degustazione"
                  ? "secondary"
                  : "outline"
              }
              className="mb-4"
            >
              {post.categoria}
            </Badge>
            
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-wine mb-6 animate-fade-in">
              {post.titolo}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-gold" />
                <span className="text-sm">
                  {new Date(post.data).toLocaleDateString('it-IT', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-gold" />
                <span className="text-sm">{post.autore}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-gold" />
                <span className="text-sm">5 min di lettura</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Tag className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span key={i} className="text-sm text-wine/70 font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Immagine principale */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="aspect-[21/9] rounded-xl overflow-hidden shadow-elegant">
              <img
                src={post.immagine}
                alt={post.titolo}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contenuto */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground/90 leading-relaxed mb-8 font-semibold">
                {post.estratto}
              </p>
              
              <div className="text-foreground/80 leading-relaxed space-y-6">
                {post.contenuto.split('\n\n').map((paragrafo, index) => (
                  <p key={index} className="text-lg">
                    {paragrafo}
                  </p>
                ))}
              </div>
            </div>

            {/* Sezione finale con immagine */}
            <div className="mt-12 p-8 bg-gradient-to-br from-wine/5 to-wine/10 rounded-xl border border-wine/10">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-wine/10 flex items-center justify-center flex-shrink-0">
                  <User className="h-10 w-10 text-wine" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-wine mb-2">
                    {post.autore}
                  </h3>
                  <p className="text-muted-foreground">
                    Esperto di vini abruzzesi e appassionato del territorio, condivide la sua conoscenza 
                    attraverso articoli che esplorano la tradizione enologica della regione.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Articoli correlati */}
      {altriArticoli.length > 0 && (
        <section className="py-16 bg-cream/30">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl font-bold text-wine mb-8 text-center">
              Articoli Correlati
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {altriArticoli.map((articolo) => (
                <Link key={articolo.id} to={`/blog/${articolo.id}`}>
                  <Card className="overflow-hidden hover-lift bg-card group h-full">
                    <div className="aspect-[16/9] bg-gradient-to-br from-wine/10 to-wine/5 overflow-hidden">
                      <img
                        src={articolo.immagine}
                        alt={articolo.titolo}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <Badge
                        variant={
                          articolo.categoria === "Territorio"
                            ? "default"
                            : articolo.categoria === "Degustazione"
                            ? "secondary"
                            : "outline"
                        }
                        className="mb-3"
                      >
                        {articolo.categoria}
                      </Badge>
                      <h3 className="font-playfair text-lg font-bold text-wine mb-2 group-hover:text-wine-dark transition-colors">
                        {articolo.titolo}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {articolo.estratto}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogDetail;
