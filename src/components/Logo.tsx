import { Flower2 } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-[hsl(47.12_72.24%_51.96%)] flex items-center justify-center shadow-sm">
        <Flower2 className="h-5 w-5 text-background" />
      </div>
      <span className="text-xl font-bold text-foreground">Tempo Pilates</span>
    </div>
  );
};

export default Logo;