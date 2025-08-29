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
      <div className="hero__content text-center">
        <h1 className="display-5 mb-6 font-bold text-white drop-shadow-lg">
          <span className="text-white text-shadow-md">Lift Your Energy.</span><br />
          <span className="text-[hsl(47.12_72.24%_51.96%)] font-semibold drop-shadow-md">Quiet Your Mind.</span>
        </h1>
        <p className="lead mb-8 text-white/95 max-w-lg mx-auto drop-shadow-sm text-lg font-medium">
          Beat-driven Pilates and breath-led Yoga designed to harmonize your nervous system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            asChild
            size="lg"
            className="bg-[hsl(47.12_72.24%_51.96%)] text-[hsl(342.35_9.6%_34.71%)] hover:bg-[hsl(47.12_72.24%_58%)] border-[hsl(47.12_72.24%_51.96%)] font-semibold text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Link to="/schedule">See Schedule</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white/80 text-white hover:bg-white/10 hover:border-[hsl(47.12_72.24%_51.96%)] backdrop-blur-sm font-semibold text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Link to="/membership">Membership &amp; Rates</Link>
          </Button>
        </div>
        <div className="mt-4 text-white/90 font-medium space-y-1">
          <div className="text-lg">You Belong Here</div>
          <div className="text-base text-[hsl(47.12_72.24%_51.96%)]">Start where you are</div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
