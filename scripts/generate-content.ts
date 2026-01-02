import { readdir, readFile, writeFile, stat } from "fs/promises";
import { resolve } from "path";
import yaml from "js-yaml";

interface ContentData {
  gameSaves: any[];
  diaries: any[];
}

async function generateContent() {
  const contentPath = resolve(process.cwd(), "content");
  const outputPath = resolve(process.cwd(), "client", "src", "data", "content.json");
  const data: ContentData = {
    gameSaves: [],
    diaries: [],
  };

  // Load game saves
  try {
    const gameSavesDir = resolve(contentPath, "game-saves");
    const gameSaveFiles = await readdir(gameSavesDir);
    for (const file of gameSaveFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(gameSavesDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const gameSave = yaml.load(content) as any;
          const slug = file.replace(/\.(yaml|yml)$/, "");
          gameSave.slug = slug;
          // Validate image URL
          if (gameSave.image && !gameSave.image.startsWith("/attached_assets/")) {
            console.warn(`Warning: Game save "${gameSave.title}" image should start with "/attached_assets/": ${gameSave.image}`);
          }
          data.gameSaves.push(gameSave);
        }
      }
    }
    // Sort by date descending
    data.gameSaves.sort((a, b) => {
      try {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      } catch {
        return 0;
      }
    });
  } catch (error) {
    console.warn("Failed to load game saves:", error);
  }

  // Load diaries
  try {
    const diariesDir = resolve(contentPath, "diaries");
    const diaryFiles = await readdir(diariesDir);
    for (const file of diaryFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(diariesDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const diary = yaml.load(content) as any;
          const slug = file.replace(/\.(yaml|yml)$/, "");
          diary.slug = slug;
          data.diaries.push(diary);
        }
      }
    }
    // Sort by date descending
    data.diaries.sort((a, b) => {
      try {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      } catch {
        return 0;
      }
    });
  } catch (error) {
    console.warn("Failed to load diaries:", error);
  }

  // Write to JSON file
  await writeFile(outputPath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Content generated successfully: ${outputPath}`);
  console.log(`  - Game Saves: ${data.gameSaves.length}`);
  console.log(`  - Diaries: ${data.diaries.length}`);
}

generateContent().catch(console.error);

