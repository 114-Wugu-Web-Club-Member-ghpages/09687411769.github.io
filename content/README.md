# 內容管理說明

本專案使用 YAML 檔案來管理遊戲存檔文章和日記內容。

## 資料夾結構

```
content/
  game-saves/  # 遊戲存檔文章資料夾
    *.yaml      # 每個 YAML 檔案對應一篇遊戲存檔文章
  diaries/      # 日記資料夾
    *.yaml      # 每個 YAML 檔案對應一篇日記
```

## 遊戲存檔文章格式

在 `content/game-saves/` 資料夾中，每個 YAML 檔案對應一篇遊戲存檔文章。檔案名稱（不含副檔名）會自動成為該文章的 URL slug。

### YAML 檔案範例

```yaml
id: "1"
title: "Minecraft 遊戲進度"
date: "2024-12-29"
game: "Minecraft"
excerpt: "今天在 Minecraft 中建造了一個超大的城堡..."
image: "/attached_assets/generated_images/Block_world_gameplay_screenshot_4f111438.png"
tags:
  - "Minecraft"
  - "建造"
  - "生存模式"
content: |
  # Minecraft 遊戲進度

  今天在 Minecraft 中建造了一個超大的城堡...
```

### 欄位說明

- `id`: 文章的唯一識別碼（字串）
- `title`: 文章標題
- `date`: 日期（格式：YYYY-MM-DD）
- `game`: 遊戲名稱
- `excerpt`: 摘要（用於列表頁面顯示）
- `image`: 圖片路徑（必須以 `/attached_assets/` 開頭，可選）
- `tags`: 標籤列表（陣列，可選）
- `content`: 文章內容（支援 Markdown 語法）

## 日記格式

在 `content/diaries/` 資料夾中，每個 YAML 檔案對應一篇日記。檔案名稱（不含副檔名）會自動成為該日記的 URL slug。

### YAML 檔案範例

```yaml
id: "1"
title: "打了很多遊戲很開心"
date: "2024-12-29"
excerpt: "今天一整天都在玩遊戲，從 Minecraft 到 Roblox..."
tags:
  - "遊戲"
  - "開心"
  - "日常"
content: |
  # 打了很多遊戲很開心

  今天一整天都在玩遊戲，從 Minecraft 到 Roblox...
```

### 欄位說明

- `id`: 日記的唯一識別碼（字串）
- `title`: 日記標題
- `date`: 日期（格式：YYYY-MM-DD）
- `excerpt`: 摘要（用於列表頁面顯示）
- `tags`: 標籤列表（陣列，可選）
- `content`: 日記內容（支援 Markdown 語法）

## 重要注意事項

1. **檔案名稱 = URL slug**：YAML 檔案的名稱（不含 `.yaml` 或 `.yml`）會自動成為該內容的 URL slug。例如：`Minecraft-遊戲進度.yaml` 的 URL 會是 `/game-save/Minecraft-遊戲進度`。

2. **Markdown 支援**：`content` 欄位支援完整的 Markdown 語法，包括：
   - 標題（#、##、###）
   - 列表（有序和無序）
   - 程式碼區塊（```）
   - 粗體、斜體
   - 連結
   - 等等

3. **圖片路徑**：所有圖片路徑必須以 `/attached_assets/` 開頭，圖片檔案應放在 `client/public/attached_assets/` 資料夾中。

4. **日期格式**：遊戲存檔文章和日記的 `date` 欄位必須使用 `YYYY-MM-DD` 格式（例如：`2024-12-29`）。

## 生成內容

在開發或建置前，需要先執行內容生成腳本：

```bash
npm run content:generate
```

這個腳本會：
1. 讀取 `content/game-saves/` 資料夾中的所有 YAML 檔案
2. 讀取 `content/diaries/` 資料夾中的所有 YAML 檔案
3. 為每個遊戲存檔文章和日記自動生成 `slug`（基於檔案名稱）
4. 驗證圖片路徑是否正確
5. 將所有內容合併成一個 JSON 檔案（`client/src/data/content.json`）
6. 按日期排序（最新的在前）

## 開發流程

1. 在對應的資料夾中新增或編輯 YAML 檔案
2. 執行 `npm run content:generate` 生成內容
3. 執行 `npm run dev` 啟動開發伺服器
4. 在瀏覽器中查看遊戲存檔文章和日記

## 建置流程

執行 `npm run build` 時會自動執行內容生成，無需手動執行。

