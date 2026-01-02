import Navigation from "@/components/Navigation";
import GameSaveCard from "@/components/GameSaveCard";
import Footer from "@/components/Footer";
import { Gamepad2 } from "lucide-react";
import { gameSaves } from "@/data/content";

export default function GameSaves() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Gamepad2 className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">遊戲存檔文章</h1>
            <p className="text-xl text-muted-foreground">記錄我的遊戲進度和心得</p>
          </div>

          <div className="space-y-8">
            {gameSaves.map((gameSave) => (
              <GameSaveCard key={gameSave.id} gameSave={gameSave} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

