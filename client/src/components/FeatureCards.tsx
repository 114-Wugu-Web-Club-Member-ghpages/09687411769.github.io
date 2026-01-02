import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const controlsIcon = "/attached_assets/generated_images/Block_style_game_controls_icon_b493691d.png";
const treasureIcon = "/attached_assets/generated_images/Block_style_treasure_chest_icon_880a988d.png";
const characterIcon = "/attached_assets/generated_images/Block_style_player_character_icon_61813685.png";
const itemsIcon = "/attached_assets/generated_images/Block_style_game_items_icon_1cb36e14.png";

const features = [
  {
    title: "簡單操作",
    description: "使用鍵盤和滑鼠輕鬆控制角色，快速上手遊戲操作",
    icon: controlsIcon,
  },
  {
    title: "尋找寶藏",
    description: "在方塊世界中探索隱藏的寶箱，收集珍貴道具和資源",
    icon: treasureIcon,
  },
  {
    title: "角色成長",
    description: "培養你的角色，提升能力，解鎖更多冒險內容",
    icon: characterIcon,
  },
  {
    title: "豐富道具",
    description: "收集各種工具和武器，打造屬於自己的裝備",
    icon: itemsIcon,
  },
];

export default function FeatureCards() {
  return (
    <section id="intro" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4 text-foreground">
            遊戲特色
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            探索方塊世界的精彩內容
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid={`card-feature-${index}`}
            >
              <CardHeader className="space-y-4">
                <div className="w-24 h-24 mx-auto bg-primary/10 rounded-lg p-4 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-center text-lg">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
