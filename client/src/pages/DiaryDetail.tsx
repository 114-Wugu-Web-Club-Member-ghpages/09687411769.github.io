import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, BookOpen } from "lucide-react";
import { Link } from "wouter";
import MarkdownContent from "@/components/MarkdownContent";
import { diaries } from "@/data/content";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function DiaryDetail() {
  const [, params] = useRoute("/diary/:slug");
  const slug = params?.slug;

  const diary = diaries.find((d) => d.slug === slug);

  if (!diary) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-semibold">找不到此日記</h1>
            <Link href="/diaries">
              <Button>返回日記列表</Button>
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
          <Link href="/diaries">
            <Button variant="ghost" className="gap-2 mb-8" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
              返回日記列表
            </Button>
          </Link>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-sm font-mono text-muted-foreground">
                  {diary.date}
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-tight" data-testid="text-title">
                {diary.title}
              </h1>

              {diary.tags && diary.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {diary.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div>
              <MarkdownContent content={diary.content} />
            </div>

            <div className="pt-8 border-t">
              <Link href="/diaries">
                <Button variant="outline" className="gap-2" data-testid="button-back-bottom">
                  <ArrowLeft className="w-4 h-4" />
                  返回日記列表
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

