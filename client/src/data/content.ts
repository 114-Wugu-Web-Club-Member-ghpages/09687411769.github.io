import type { GameSave, Diary } from "@/types/content";
import contentData from "./content.json";

interface ContentData {
  gameSaves: GameSave[];
  diaries: Diary[];
}

const content = contentData as ContentData;

export const gameSaves: GameSave[] = content.gameSaves;
export const diaries: Diary[] = content.diaries;

