import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const gameplayImage = "/attached_assets/generated_images/Block_world_gameplay_screenshot_4f111438.png";

const steps = [
  {
    number: 1,
    title: "建立角色",
    description: "首先，建立你的方塊角色。選擇外觀和初始裝備，準備開始冒險。",
  },
  {
    number: 2,
    title: "學習移動",
    description: "使用 W、A、S、D 鍵移動角色，空白鍵跳躍，滑鼠控制視角方向。",
  },
  {
    number: 3,
    title: "收集資源",
    description: "點擊方塊進行挖掘，收集木材、石頭等基礎資源，用於建造和製作工具。",
  },
  {
    number: 4,
    title: "製作工具",
    description: "打開製作介面，使用收集的資源製作鎬、斧頭、劍等各種工具和武器。",
  },
  {
    number: 5,
    title: "建造庇護所",
    description: "在夜晚來臨前，建造一個安全的庇護所，保護自己免受怪物攻擊。",
  },
  {
    number: 6,
    title: "探索世界",
    description: "探索廣闊的方塊世界，尋找寶藏、挑戰怪物，體驗無盡的冒險樂趣！",
  },
];

export default function TutorialSteps() {
  return (
    <section id="tutorial" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4 text-foreground">
            玩法教學
          </h2>
          <p className="text-muted-foreground text-lg">
            跟著步驟輕鬆上手
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-4 group"
                data-testid={`step-${step.number}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-md">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    {step.title}
                    <Check className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-24 h-fit">
            <Card className="overflow-hidden shadow-xl">
              <img
                src={gameplayImage}
                alt="遊戲畫面示範"
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">遊戲畫面</h3>
                <p className="text-muted-foreground text-sm">
                  實際遊戲畫面展示，體驗精彩的方塊世界冒險
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
