import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const heroImage = "/attached_assets/generated_images/Bright_block_world_hero_banner_589f73fa.png";

export default function HeroSection() {
  const scrollToIntro = () => {
    const element = document.getElementById("intro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10" />
        <img
          src={heroImage}
          alt="方塊世界遊戲場景"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-mono text-2xl md:text-4xl lg:text-5xl text-white mb-6 drop-shadow-lg leading-relaxed">
          方塊世界
          <br />
          遊戲說明書
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl drop-shadow-md">
          歡迎來到充滿冒險的方塊世界！探索、建造、生存
        </p>
        <Button
          variant="default"
          size="lg"
          onClick={scrollToIntro}
          className="text-lg shadow-xl hover:scale-105 transition-transform"
          data-testid="button-start-learning"
        >
          <ArrowDown className="w-5 h-5 mr-2" />
          開始學習
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
}
