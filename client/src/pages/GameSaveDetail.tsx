import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Gamepad2 } from "lucide-react";
import { Link } from "wouter";
import MarkdownContent from "@/components/MarkdownContent";
import { gameSaves } from "@/data/content";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function GameSaveDetail() {
  const [, params] = useRoute("/game-save/:slug");
  const slug = params?.slug;

  const gameSave = gameSaves.find((g) => g.slug === slug);

  if (!gameSave) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-semibold">找不到此遊戲存檔文章</h1>
            <Link href="/game-saves">
              <Button>返回遊戲存檔列表</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <Link href="/game-saves">
            <Button variant="ghost" className="gap-2 mb-8" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
              返回遊戲存檔列表
            </Button>
          </Link>

          <div className="space-y-8">
            {gameSave.image && (
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src={gameSave.image}
                  alt={gameSave.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Gamepad2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-mono text-muted-foreground">
                  {gameSave.game}
                </span>
                <Calendar className="w-5 h-5 text-primary ml-4" />
                <span className="text-sm font-mono text-muted-foreground">
                  {gameSave.date}
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-tight" data-testid="text-title">
                {gameSave.title}
              </h1>

              {gameSave.tags && gameSave.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {gameSave.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div>
              <MarkdownContent content={gameSave.content} />
            </div>

            <div className="pt-8 border-t">
              <Link href="/game-saves">
                <Button variant="outline" className="gap-2" data-testid="button-back-bottom">
                  <ArrowLeft className="w-4 h-4" />
                  返回遊戲存檔列表
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

