import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Heart, Users, Leaf, Sparkles, Coffee, ShoppingBag } from 'lucide-react';

const About = () => {
  const instructors = [
    {
      name: "Maya Chen",
      title: "Founder & Lead Instructor",
      bio: "Certified Pilates instructor with 8+ years of experience. Believes movement should feel like medicine for the soul.",
      specialties: ["Mat Pilates", "Prenatal", "Reformer"]
    },
    {
      name: "Aria Nakamura", 
      title: "Yoga Instructor",
      bio: "Registered yoga teacher specializing in nervous system healing. Creates space for all bodies to find their breath.",
      specialties: ["Vinyasa", "Yin", "Meditation"]
    },
    {
      name: "Priya Patel",
      title: "Pilates Instructor", 
      bio: "Former dancer turned movement educator. Passionate about building strength with joy and community connection.",
      specialties: ["Mat Pilates", "Barre", "Movement Therapy"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section bg-secondary/20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">About Tempo Pilates</h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            A modern sanctuary where eastern wellness traditions meet contemporary movement science. 
            Discover the profound connection between mind, body, and spirit.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="tag">Ancient Wisdom</span>
            <span className="tag">Modern Practice</span>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section" id="story">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-foreground/80">
                <p>
                  Tempo Pilates was born from a deep reverence for the ancient wisdom of eastern wellness practices 
                  and their profound ability to heal and harmonize the human experience.
                </p>
                <p>
                  Our sanctuary honors the sacred connection between breath, movement, and consciousness. 
                  Through the precision of Pilates and the meditative flow of yoga, we create a space where 
                  the nervous system can find its natural rhythm between activation and rest.
                </p>
                <p>
                  Every element of our practice is rooted in the understanding that true wellness emerges when we 
                  honor both the body's need for strength and the spirit's call for peace. Here, ancient traditions 
                  meet modern movement science to support your journey toward wholeness.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-secondary/30 border-[hsl(47.12_72.24%_51.96%)]/30 p-6 shadow-sm">
                <Heart className="h-8 w-8 text-[hsl(47.12_72.24%_51.96%)] mb-3" />
                <h4 className="font-semibold mb-2">Mind-Body Unity</h4>
                <p className="text-sm text-foreground/80">
                  Honoring the sacred connection between mental clarity and physical wellness.
                </p>
              </Card>
              <Card className="bg-secondary/30 border-[hsl(47.12_72.24%_51.96%)]/30 p-6 shadow-sm">
                <Users className="h-8 w-8 text-[hsl(47.12_72.24%_51.96%)] mb-3" />
                <h4 className="font-semibold mb-2">Eastern Traditions</h4>
                <p className="text-sm text-foreground/80">
                  Celebrating ancient wisdom and time-tested practices for holistic healing.
                </p>
              </Card>
              <Card className="bg-secondary/30 border-[hsl(47.12_72.24%_51.96%)]/30 p-6 shadow-sm">
                <Leaf className="h-8 w-8 text-[hsl(47.12_72.24%_51.96%)] mb-3" />
                <h4 className="font-semibold mb-2">Conscious Movement</h4>
                <p className="text-sm text-foreground/80">
                  Every posture and breath intentionally designed to support your wellbeing journey.
                </p>
              </Card>
              <Card className="bg-secondary/30 border-[hsl(47.12_72.24%_51.96%)]/30 p-6 shadow-sm">
                <Sparkles className="h-8 w-8 text-[hsl(47.12_72.24%_51.96%)] mb-3" />
                <h4 className="font-semibold mb-2">Energy Cultivation</h4>
                <p className="text-sm text-foreground/80">
                  Build vitality and inner strength through practices that honor your body's wisdom.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Design */}
      <section className="section section--secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Your Carrollton Sanctuary</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Experience the perfect fusion of eastern design principles and modern comfort. Our Carrollton location 
              offers the ultimate in convenience while honoring the sacred space needed for transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-background/50 border-[hsl(47.12_72.24%_51.96%)]/20 shadow-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-[hsl(47.12_72.24%_51.96%)]/20 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-[hsl(47.12_72.24%_51.96%)]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(47.12_72.24%_51.96%)]">Highway Convenience</h3>
                <p className="text-sm text-foreground/80">
                  Strategic location with easy access from George Bush Turnpike and I35E, perfect for busy schedules.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-background/50 border-[hsl(47.12_72.24%_51.96%)]/20 shadow-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-[hsl(47.12_72.24%_51.96%)]/20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-[hsl(47.12_72.24%_51.96%)]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(47.12_72.24%_51.96%)]">Cultural Richness</h3>
                <p className="text-sm text-foreground/80">
                  Surrounded by authentic Asian markets and dining, creating a complete wellness lifestyle experience.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-background/50 border-[hsl(47.12_72.24%_51.96%)]/20 shadow-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-[hsl(47.12_72.24%_51.96%)]/20 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-[hsl(47.12_72.24%_51.96%)]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(47.12_72.24%_51.96%)]">Great Oasis Center</h3>
                <p className="text-sm text-foreground/80">
                  Part of Carrollton's premier wellness and shopping destination, surrounded by like-minded businesses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lounge & Events */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-secondary/30 border-[hsl(47.12_72.24%_51.96%)]/30 p-6 shadow-sm">
                  <Coffee className="h-8 w-8 text-[hsl(47.12_72.24%_51.96%)] mb-3" />
                  <h4 className="font-semibold mb-2 text-[hsl(47.12_72.24%_51.96%)]">Photo Nook</h4>
                  <p className="text-sm text-foreground/80">
                    Beautiful natural lighting perfect for celebrating your practice journey.
                  </p>
                </Card>
                <Card className="bg-secondary/30 border-[hsl(47.12_72.24%_51.96%)]/30 p-6 shadow-sm">
                  <Heart className="h-8 w-8 text-[hsl(47.12_72.24%_51.96%)] mb-3" />
                  <h4 className="font-semibold mb-2 text-[hsl(47.12_72.24%_51.96%)]">Intention Board</h4>
                  <p className="text-sm text-foreground/80">
                    Seasonal themes for setting and sharing your wellness intentions with community.
                  </p>
                </Card>
                <Card className="bg-secondary/30 border-[hsl(47.12_72.24%_51.96%)]/30 p-6 shadow-sm">
                  <ShoppingBag className="h-8 w-8 text-[hsl(47.12_72.24%_51.96%)] mb-3" />
                  <h4 className="font-semibold mb-2 text-[hsl(47.12_72.24%_51.96%)]">Retail Corner</h4>
                  <p className="text-sm text-foreground/80">
                    Curated wellness products from local AAPI and women owned brands.
                  </p>
                </Card>
                <Card className="bg-secondary/30 border-[hsl(47.12_72.24%_51.96%)]/30 p-6 shadow-sm">
                  <Users className="h-8 w-8 text-[hsl(47.12_72.24%_51.96%)] mb-3" />
                  <h4 className="font-semibold mb-2 text-[hsl(47.12_72.24%_51.96%)]">Pop-Up Events</h4>
                  <p className="text-sm text-foreground/80">
                    Regular collaborations with local wellness and AAPI community leaders.
                  </p>
                </Card>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Lounge & Events</h2>
              <div className="space-y-6 text-foreground/80">
                <p>
                  Beyond movement, Tempo Pilates is a community hub. Our thoughtfully designed 
                  lounge space encourages connection and celebrates the local wellness ecosystem.
                </p>
                <p>
                  We regularly host pop-up events with local AAPI and women owned wellness brands, 
                  creating opportunities for community members to discover new products and connect 
                  with like minded entrepreneurs.
                </p>
                <p>
                  Our seasonal intention board invites you to set and share your wellness goals, 
                  fostering a sense of collective growth and support.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild variant="outline" className="border-[hsl(47.12_72.24%_51.96%)] text-[hsl(47.12_72.24%_51.96%)] hover:bg-[hsl(47.12_72.24%_51.96%)] hover:text-background">
                  <Link to="/schedule">Visit Our Community</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="section section--secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Meet Our Instructors</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Experienced, compassionate teachers who create space for authentic movement and community connection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <Card key={instructor.name} className="bg-background/80 border-[hsl(47.12_72.24%_51.96%)]/20 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-[hsl(47.12_72.24%_51.96%)]/20 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-12 w-12 text-[hsl(47.12_72.24%_51.96%)]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{instructor.name}</h3>
                  <p className="text-[hsl(47.12_72.24%_51.96%)] font-medium mb-4">{instructor.title}</p>
                  <p className="text-foreground/80 text-sm mb-4">{instructor.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {instructor.specialties.map((specialty) => (
                      <span key={specialty} className="px-3 py-1 bg-[hsl(47.12_72.24%_51.96%)]/20 text-xs rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin?</h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join our community of movers, breathers, and seekers. Your practice, your pace, your belonging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[hsl(47.12_72.24%_51.96%)] text-background hover:bg-[hsl(47.12_72.24%_45.96%)]">
              <Link to="/schedule">Book Your First Class</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[hsl(47.12_72.24%_51.96%)] text-[hsl(47.12_72.24%_51.96%)] hover:bg-[hsl(47.12_72.24%_51.96%)] hover:text-background">
              <Link to="/membership">View New Student Offers</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;