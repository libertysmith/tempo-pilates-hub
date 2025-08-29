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
        <h1 className="display-5 mb-6 font-bold">
          <span className="text-[hsl(43_46%_55%)] text-shadow-md text-5xl md:text-6xl font-bold">Lift Your Energy.</span><br />
          <span className="text-[hsl(47.12_72.24%_51.96%)] font-semibold drop-shadow-lg text-4xl md:text-5xl">Quiet Your Mind.</span>
        </h1>
        <p className="lead mb-8 text-[hsl(45_74%_92%)] max-w-lg mx-auto drop-shadow-sm text-xl font-medium">
          Beat-driven Pilates and breath-led Yoga designed to harmonize your nervous system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            asChild
            size="lg"
            className="bg-[hsl(43_46%_55%)] text-[hsl(342_10%_35%)] hover:bg-[hsl(43_46%_62%)] border-[hsl(43_46%_55%)] font-semibold text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Link to="/schedule">See Schedule</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-[hsl(43_46%_55%)] text-[hsl(342_10%_35%)] hover:bg-[hsl(43_46%_55%)] hover:text-[hsl(45_74%_92%)] backdrop-blur-sm font-semibold text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Link to="/membership">Membership &amp; Rates</Link>
          </Button>
        </div>
        <div className="mt-4 font-medium space-y-1">
          <div className="text-lg text-[hsl(45_74%_92%)] drop-shadow-sm">You Belong Here</div>
          <div className="text-base text-[hsl(47.12_72.24%_51.96%)] font-semibold">Start where you are</div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
