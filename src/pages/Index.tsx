import Layout from '@/components/Layout';
import HeroVideo from '@/components/HeroVideo';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Music, Heart, Users, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Video Section */}
      <HeroVideo />

      {/* Two Practices Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Harmonize Mind, Body & Spirit</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Experience the profound connection between ancient eastern wisdom and modern movement science through our complementary practices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mat Pilates */}
            <Card className="bg-secondary/30 border-accent/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Sparkles className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Mat Pilates</h3>
                  <p className="text-foreground/80 mb-6">
                    Dynamic movement practice rooted in precision and control. Build physical strength while cultivating mental clarity through intentional, flowing sequences that connect breath to motion.
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[hsl(47.12_72.24%_51.96%)] mr-3"></div>
                    <span>Builds core strength and stability</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[hsl(47.12_72.24%_51.96%)] mr-3"></div>
                    <span>Improves posture and alignment</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[hsl(47.12_72.24%_51.96%)] mr-3"></div>
                    <span>Enhances focus and mental clarity</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[hsl(47.12_72.24%_51.96%)] mr-3"></div>
                    <span>Activates mind-body connection</span>
                  </li>
                </ul>
                <blockquote className="text-lg font-medium text-primary border-l-4 border-[hsl(47.12_72.24%_51.96%)] pl-4">
                  "My energy feels lifted after Pilates."
                </blockquote>
              </CardContent>
            </Card>

            {/* Yoga */}
            <Card className="bg-secondary/30 border-accent/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Heart className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Yoga</h3>
                  <p className="text-foreground/80 mb-6">
                    Ancient eastern practice harmonizing breath, movement, and meditation. Cultivate inner peace while building flexibility, balance, and deep awareness of your body's natural wisdom.
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[hsl(47.12_72.24%_51.96%)] mr-3"></div>
                    <span>Reduces stress and anxiety</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[hsl(47.12_72.24%_51.96%)] mr-3"></div>
                    <span>Improves flexibility and mobility</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[hsl(47.12_72.24%_51.96%)] mr-3"></div>
                    <span>Promotes deep relaxation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[hsl(47.12_72.24%_51.96%)] mr-3"></div>
                    <span>Connects you to ancient wisdom</span>
                  </li>
                </ul>
                <blockquote className="text-lg font-medium text-primary border-l-4 border-[hsl(47.12_72.24%_51.96%)] pl-4">
                  "My mind feels quiet after yoga."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Music is a Wellness Tool Section */}
      <section className="section section--secondary">
        <div className="container">
          <div className="text-center mb-12">
            <Music className="h-16 w-16 text-[hsl(47.12_72.24%_51.96%)] mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Sound as Sacred Medicine</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              Following eastern traditions that honor sound as healing, our carefully curated soundscapes support your practice. Rhythmic beats activate energy channels, while meditative tones calm the nervous system and restore balance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-background/50 border-[hsl(47.12_72.24%_51.96%)]/20 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3 text-[hsl(47.12_72.24%_51.96%)]">Energizing Rhythms</h4>
                <p className="text-sm text-foreground/80">
                  Carefully selected beats that activate your energy centers and support dynamic movement flow.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-background/50 border-[hsl(47.12_72.24%_51.96%)]/20 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3 text-[hsl(47.12_72.24%_51.96%)]">Meditative Soundscapes</h4>
                <p className="text-sm text-foreground/80">
                  Ancient instruments and natural sounds that guide you into deeper states of awareness and relaxation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-background/50 border-[hsl(47.12_72.24%_51.96%)]/20 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3 text-[hsl(47.12_72.24%_51.96%)]">Healing Frequencies</h4>
                <p className="text-sm text-foreground/80">
                  Sound therapy techniques integrated into practice to promote cellular healing and emotional release.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prime Carrollton Location Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <Users className="h-16 w-16 text-[hsl(47.12_72.24%_51.96%)] mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Prime Carrollton Location</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              Perfectly positioned in the heart of North Texas, our studio offers unmatched convenience and accessibility. Located in the vibrant Great Oasis shopping center with easy highway access and cultural connections.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Perfectly Connected</h3>
              <div className="space-y-4 mb-8">
                <p className="text-foreground/80">
                  Experience ultimate convenience with our strategic Carrollton location. Whether commuting from Dallas or the northern suburbs, you'll find us easily accessible with major highways just minutes away.
                </p>
                <p className="text-foreground/80">
                  Immerse yourself in a culturally rich area with authentic Asian markets and dining options nearby, creating a holistic wellness experience that extends beyond our studio walls.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="tag">Convenient Access</span>
                <span className="tag">Cultural Hub</span>
              </div>
              
              <Button asChild variant="outline" className="border-[hsl(47.12_72.24%_51.96%)] text-[hsl(47.12_72.24%_51.96%)] hover:bg-[hsl(47.12_72.24%_51.96%)] hover:text-background">
                <Link to="/about#story">Learn Our Story</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-secondary/30 border-[hsl(47.12_72.24%_51.96%)]/30 p-6 shadow-sm">
                <h4 className="font-semibold mb-2 text-[hsl(47.12_72.24%_51.96%)]">Highway Access</h4>
                <p className="text-sm text-foreground/80">
                  5 minutes from George Bush Turnpike and 10 minutes from I35E for seamless commuting.
                </p>
              </Card>
              
              <Card className="bg-secondary/30 border-[hsl(47.12_72.24%_51.96%)]/30 p-6 shadow-sm">
                <h4 className="font-semibold mb-2 text-[hsl(47.12_72.24%_51.96%)]">Cultural Connection</h4>
                <p className="text-sm text-foreground/80">
                  5 minutes from H-mart and K-town, connecting you to authentic Asian culture and cuisine.
                </p>
              </Card>
              
              <Card className="bg-secondary/30 border-[hsl(47.12_72.24%_51.96%)]/30 p-6 shadow-sm">
                <h4 className="font-semibold mb-2 text-[hsl(47.12_72.24%_51.96%)]">Great Oasis Center</h4>
                <p className="text-sm text-foreground/80">
                  Located in Carrollton's up-and-coming premier shopping and wellness destination.
                </p>
              </Card>
              
              <Card className="bg-secondary/30 border-[hsl(47.12_72.24%_51.96%)]/30 p-6 shadow-sm">
                <h4 className="font-semibold mb-2 text-[hsl(47.12_72.24%_51.96%)]">Community Hub</h4>
                <p className="text-sm text-foreground/80">
                  Surrounded by complementary wellness services and healthy dining options.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
