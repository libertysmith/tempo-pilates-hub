import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Vite will prepend the correct base path (e.g., /temple-flows/) at build time.
const videoSrc = `${import.meta.env.BASE_URL}assets/hero.mp4`;
const posterSrc = `${import.meta.env.BASE_URL}assets/img/hero-poster.jpg`; // optional

const HeroVideo = () => {
  return (
    <section className="hero hero--video">
      <div className="hero__media">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc} // remove if you don't want a poster
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="hero__overlay"></div>
      </div>
      <div className="hero__content text-center text-background">
        <h1 className="display-5 mb-4 text-background font-bold">
          Lift Your Energy.<br />
          <span className="text-background">Quiet Your Mind.</span>
        </h1>
        <p className="lead mb-6 text-background/90 max-w-md mx-auto">
          Beat-driven Pilates and breath-led Yoga designed to harmonize your nervous system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <Button
            asChild
            size="lg"
            className="bg-[hsl(47.12_72.24%_51.96%)] text-background hover:bg-[hsl(47.12_72.24%_45.96%)] border-[hsl(47.12_72.24%_51.96%)]"
          >
            <Link to="/schedule">See Schedule</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-background text-background hover:bg-background hover:text-foreground"
          >
            <Link to="/membership">Membership &amp; Rates</Link>
          </Button>
        </div>
        <div className="mt-2 text-sm opacity-90">
          <div>You Belong Here</div>
          <div>Start where you are</div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
