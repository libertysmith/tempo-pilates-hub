import { Flower } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(147_35%_52%)] to-[hsl(147_45%_45%)] flex items-center justify-center shadow-sm">
        <Flower className="h-5 w-5 text-background" />
      </div>
      <span className="text-xl font-bold text-foreground">Tempo Pilates</span>
    </div>
  );
};

export default Logo;