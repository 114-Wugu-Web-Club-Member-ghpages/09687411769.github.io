import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-card border-b-4 border-primary shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground text-xl font-bold">🎮</span>
            </div>
            <h1 className="font-mono text-sm md:text-base font-bold text-foreground">
              方塊世界
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("intro")}
              data-testid="button-nav-intro"
            >
              遊戲介紹
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("video")}
              data-testid="button-nav-video"
            >
              影片教學
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("tutorial")}
              data-testid="button-nav-tutorial"
            >
              玩法說明
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("rules")}
              data-testid="button-nav-rules"
            >
              遊戲規則
            </Button>
            <Link href="/game-saves">
              <Button variant="ghost" size="sm" data-testid="button-nav-game-saves">
                遊戲存檔
              </Button>
            </Link>
            <Link href="/diaries">
              <Button variant="ghost" size="sm" data-testid="button-nav-diaries">
                日記
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("intro")}
              data-testid="button-mobile-nav-intro"
            >
              遊戲介紹
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("video")}
              data-testid="button-mobile-nav-video"
            >
              影片教學
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("tutorial")}
              data-testid="button-mobile-nav-tutorial"
            >
              玩法說明
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("rules")}
              data-testid="button-mobile-nav-rules"
            >
              遊戲規則
            </Button>
            <Link href="/game-saves">
              <Button variant="ghost" className="w-full justify-start" data-testid="button-mobile-nav-game-saves">
                遊戲存檔
              </Button>
            </Link>
            <Link href="/diaries">
              <Button variant="ghost" className="w-full justify-start" data-testid="button-mobile-nav-diaries">
                日記
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
