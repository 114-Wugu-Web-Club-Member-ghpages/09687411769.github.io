import Navigation from "@/components/Navigation";
import DiaryCard from "@/components/DiaryCard";
import Footer from "@/components/Footer";
import { BookOpen } from "lucide-react";
import { diaries } from "@/data/content";

export default function Diaries() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">我的日記</h1>
            <p className="text-xl text-muted-foreground">記錄生活中的每一個精彩瞬間</p>
          </div>

          <div className="space-y-8">
            {diaries.map((diary) => (
              <DiaryCard key={diary.id} diary={diary} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

