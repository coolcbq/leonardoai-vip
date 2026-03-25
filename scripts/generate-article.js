#!/usr/bin/env node

/**
 * Auto-generate a high-quality SEO-optimized Leonardo AI tutorial article
 * using Qwen API and publish it to Cloudflare D1.
 *
 * Required env vars:
 *   QWEN_API_KEY          - DashScope API key
 *   CLOUDFLARE_API_TOKEN  - Cloudflare API token with D1 edit permission
 *   CLOUDFLARE_ACCOUNT_ID - Cloudflare account ID
 *   D1_DATABASE_ID        - D1 database ID
 */

const TOPICS = [
  {
    category: "Getting Started",
    subjects: [
      "Complete beginner's guide to Leonardo AI in 2026",
      "How to set up your Leonardo AI account and workspace",
      "Leonardo AI interface tour: every tool and panel explained",
      "Creating your first AI image with Leonardo AI step by step",
      "Leonardo AI free vs paid plans: which one is right for you",
      "Understanding Leonardo AI tokens and how to manage them",
      "Leonardo AI vs Midjourney vs DALL-E: honest comparison",
      "Essential Leonardo AI settings every beginner should know",
      "Organizing your Leonardo AI projects like a pro",
      "Top 10 Leonardo AI mistakes beginners make and how to avoid them",
    ],
  },
  {
    category: "Prompt Engineering",
    subjects: [
      "How to write effective prompts for Leonardo AI",
      "Mastering negative prompts in Leonardo AI for better results",
      "Style keywords that transform your Leonardo AI images",
      "Creating photorealistic images with Leonardo AI prompts",
      "How to generate consistent characters in Leonardo AI",
      "Using weighted tokens in Leonardo AI for precise control",
      "Landscape and environment prompts for Leonardo AI",
      "Translating traditional art styles into Leonardo AI prompts",
      "Combining multiple concepts in a single Leonardo AI prompt",
      "Troubleshooting common Leonardo AI prompt problems",
    ],
  },
  {
    category: "Image Generation",
    subjects: [
      "Leonardo AI model comparison: which model to use and when",
      "Optimizing Leonardo AI settings for the best image quality",
      "Aspect ratios in Leonardo AI: choosing the right dimensions",
      "Understanding guidance scale in Leonardo AI image generation",
      "Batch generation in Leonardo AI: creating multiple images efficiently",
      "Mastering lighting and shadows in Leonardo AI images",
      "How to use seed values in Leonardo AI for reproducible results",
      "Upscaling Leonardo AI images without losing quality",
      "Color theory applied to Leonardo AI image generation",
      "Speed vs quality settings in Leonardo AI: finding the balance",
    ],
  },
  {
    category: "AI Canvas",
    subjects: [
      "Leonardo AI Canvas inpainting tutorial: edit any part of your image",
      "Outpainting with Leonardo AI Canvas to expand your images",
      "How to remove unwanted objects with Leonardo AI Canvas",
      "Fixing faces and expressions with Leonardo AI Canvas",
      "Combining multiple images using Leonardo AI Canvas",
      "Background replacement techniques in Leonardo AI Canvas",
      "Complete Leonardo AI Canvas workflow from start to finish",
      "How to fix hands and fingers with Leonardo AI Canvas",
      "Creating panoramic images with Leonardo AI Canvas outpainting",
      "Advanced compositing techniques in Leonardo AI Canvas",
    ],
  },
  {
    category: "Video & Motion",
    subjects: [
      "Getting started with Leonardo AI video generation",
      "Creating smooth animations with Leonardo AI Motion",
      "Leonardo AI Motion settings explained for beginners",
      "Best practices for AI video generation with Leonardo AI",
      "Camera movement techniques in Leonardo AI video",
      "Creating seamless looping videos with Leonardo AI",
      "Leonardo AI video vs Runway vs Pika: which is best",
      "How to achieve cinematic results with Leonardo AI video",
      "Storyboarding with Leonardo AI for video projects",
      "Combining video sequences in Leonardo AI for longer clips",
    ],
  },
  {
    category: "Advanced Techniques",
    subjects: [
      "Training custom models in Leonardo AI: complete guide",
      "Understanding and using LoRA models in Leonardo AI",
      "Leonardo AI API tutorial: automate your image generation",
      "Fine-tuning Leonardo AI models for specific art styles",
      "Preparing training datasets for Leonardo AI custom models",
      "Using ControlNet features in Leonardo AI for precise layouts",
      "Building automated workflows with the Leonardo AI API",
      "Advanced parameter combinations in Leonardo AI",
      "Using reference images effectively in Leonardo AI",
      "Integrating Leonardo AI into your creative pipeline",
    ],
  },
  {
    category: "Style Guides",
    subjects: [
      "Creating photorealistic portraits with Leonardo AI",
      "Anime and manga art style guide for Leonardo AI",
      "Concept art creation with Leonardo AI for game developers",
      "Generating game assets and sprites with Leonardo AI",
      "Product photography simulation with Leonardo AI",
      "Watercolor and oil painting styles in Leonardo AI",
      "Architectural visualization with Leonardo AI",
      "Pixel art and retro game graphics with Leonardo AI",
      "Professional portrait photography with Leonardo AI",
      "Fantasy and sci-fi world building with Leonardo AI",
    ],
  },
  {
    category: "Tips & Tricks",
    subjects: [
      "10 Leonardo AI tips that will instantly improve your results",
      "How to save tokens and maximize your Leonardo AI usage",
      "Leonardo AI workflow optimization for faster results",
      "Hidden Leonardo AI features most users don't know about",
      "Building a consistent visual brand with Leonardo AI",
      "Leonardo AI quality checklist before publishing your images",
      "Batch processing strategies for Leonardo AI power users",
      "Creating social media content with Leonardo AI",
      "Leonardo AI keyboard shortcuts and time-saving tricks",
      "Building your own Leonardo AI prompt library for reuse",
    ],
  },
];

// Curated free Unsplash photo IDs per category — technology/AI/creative themed
const UNSPLASH_PHOTOS = {
  "Getting Started": [
    "1485827404703-89b55fcc595e",
    "1526374965328-7f61d4dc18c5",
    "1531297484001-80022131f5a1",
    "1488590528505-98d2b5aba04b",
    "1518770660439-4636190af475",
    "1461749280684-dccba630e2f6",
    "1504868584819-f8e8954a3d60",
    "1550751827-4bd374c3f58b",
  ],
  "Prompt Engineering": [
    "1555949963-ff9fe0c870eb",
    "1677442136019-21780ecad995",
    "1620712943543-bcc4688e7485",
    "1558618666-fcd25c85f0aa",
    "1516110833967-0b5716caea67",
    "1535378917042-10a22c95931a",
    "1509228468518-180dd4864904",
    "1451187580459-43490279c0fa",
  ],
  "Image Generation": [
    "1547954575-855750c57bd3",
    "1563986768494-4dee2763ff3f",
    "1561557944-6e7860d1a7eb",
    "1558591710-4b4a1ae0f04d",
    "1633356122544-f134324a6cee",
    "1614064641938-3bbee52942c7",
    "1617791160505-6f00504e3519",
    "1550745165-9bc0b252726f",
  ],
  "AI Canvas": [
    "1561070791-2526d30994b5",
    "1513364776144-60967b0f800f",
    "1498050108023-c5249f4df085",
    "1558655146-9f430324789b",
    "1611532736597-de2d4265fba3",
    "1609921212029-0f4a1b48a71f",
    "1542831371-29b0f74f9713",
    "1507238691740-187a5b1d37b8",
  ],
  "Video & Motion": [
    "1536240478700-b869070f9279",
    "1574717024653-61fd2cf4d44d",
    "1492619375914-88005aa9e8fb",
    "1478720568477-152d9b164e26",
    "1518136247453-74e7b5265980",
    "1524712245354-2c4e5e7121c0",
    "1485846234645-a62644f84728",
    "1505533321630-975218a5f66f",
  ],
  "Advanced Techniques": [
    "1555255707-c07966088b7b",
    "1504639725590-34d0984388bd",
    "1526374965328-7f61d4dc18c5",
    "1517694712202-14dd9538aa97",
    "1558494949-ef010cbdcc31",
    "1531482615713-2afd69097998",
    "1535378917042-10a22c95931a",
    "1550751827-4bd374c3f58b",
  ],
  "Style Guides": [
    "1513364776144-60967b0f800f",
    "1547891654-e66ed7ebb968",
    "1460925895917-afdab827c52f",
    "1507003211169-0a1dd7228f2d",
    "1482160549825-59d1b23cb208",
    "1561557944-6e7860d1a7eb",
    "1558618666-fcd25c85f0aa",
    "1516110833967-0b5716caea67",
  ],
  "Tips & Tricks": [
    "1488590528505-98d2b5aba04b",
    "1531297484001-80022131f5a1",
    "1485827404703-89b55fcc595e",
    "1518770660439-4636190af475",
    "1504868584819-f8e8954a3d60",
    "1526374965328-7f61d4dc18c5",
    "1461749280684-dccba630e2f6",
    "1555949963-ff9fe0c870eb",
  ],
};

// Query D1 for existing articles' categories, titles, cover images, and slugs
async function fetchExistingArticles(cfToken, accountId, dbId) {
  const sql = `SELECT title, category, cover_image, slug FROM posts WHERE is_published = 1`;
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${dbId}/query`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cfToken}`,
      },
      body: JSON.stringify({ sql }),
    }
  );
  const data = await response.json();
  if (!data.success || !data.result?.[0]?.results) {
    console.warn("Warning: could not fetch existing articles, proceeding without dedup");
    return { usedSubjects: new Set(), usedImages: new Set(), usedSlugs: new Set() };
  }
  const rows = data.result[0].results;
  const usedSubjects = new Set();
  const usedImages = new Set();
  const usedSlugs = new Set();

  for (const row of rows) {
    if (row.title) usedSubjects.add(row.title.toLowerCase());
    if (row.cover_image) usedImages.add(row.cover_image);
    if (row.slug) usedSlugs.add(row.slug);
  }
  return { usedSubjects, usedImages, usedSlugs };
}

// Check if a subject has already been covered by comparing against existing titles
function isSubjectUsed(subject, usedSubjects) {
  const subjectLower = subject.toLowerCase();
  for (const title of usedSubjects) {
    // Match if the existing title contains most key words from the subject
    const subjectWords = subjectLower.split(/\s+/).filter((w) => w.length > 3);
    const matchCount = subjectWords.filter((w) => title.includes(w)).length;
    if (matchCount >= subjectWords.length * 0.6) return true;
  }
  return false;
}

const CATEGORIES = TOPICS.map((t) => t.category);

function pickRandomTopicFromPool(usedSubjects) {
  const available = [];
  for (const cat of TOPICS) {
    for (const subject of cat.subjects) {
      if (!isSubjectUsed(subject, usedSubjects)) {
        available.push({ category: cat.category, subject });
      }
    }
  }

  if (available.length === 0) {
    return null; // predefined pool exhausted
  }

  console.log(`Available predefined topics: ${available.length} / 80`);
  return available[Math.floor(Math.random() * available.length)];
}

// Generate a brand-new topic via Qwen AI when predefined pool is exhausted
async function generateNewTopic(usedSubjects, apiKey) {
  const existingTitles = [...usedSubjects].slice(-50).join("\n- ");
  const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];

  const prompt = `You are a content strategist for leonardoai.vip, a Leonardo AI tutorial site.

Category: ${category}

Here are titles of articles we have ALREADY published (do NOT repeat or closely overlap with any of these):
- ${existingTitles}

Generate ONE brand-new, unique tutorial topic for the "${category}" category about Leonardo AI.
The topic should be:
- Specific and actionable (not generic)
- Different from all existing articles listed above
- Relevant to Leonardo AI users in 2026
- Interesting enough to attract search traffic

Return ONLY a JSON object, no markdown:
{"category": "${category}", "subject": "Your new topic title here"}`;

  console.log("Predefined topics exhausted. Generating new topic with AI...");
  let raw = await callQwenAPI(prompt, apiKey);
  raw = raw.replace(/^```(?:json)?\s*\n?/, "").replace(/\n?```\s*$/, "");

  try {
    const result = JSON.parse(raw);
    if (!result.subject || !result.category) throw new Error("Missing fields");
    // Validate category is one of ours
    if (!CATEGORIES.includes(result.category)) result.category = category;
    return result;
  } catch {
    // Fallback: use the raw text as subject
    console.warn("Failed to parse AI topic response, using fallback");
    return { category, subject: `Leonardo AI ${category} Guide for ${new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}` };
  }
}

// Get a verified cover image, excluding already-used images
async function getVerifiedCoverImageWithDedup(category, slug, usedImages) {
  // Collect ALL photo IDs across all categories into a flat pool
  const allPhotos = [];
  // Primary: photos from the target category first
  const primaryPhotos = UNSPLASH_PHOTOS[category] || UNSPLASH_PHOTOS["Getting Started"];
  for (const p of primaryPhotos) allPhotos.push(p);
  // Secondary: photos from other categories
  for (const [cat, photos] of Object.entries(UNSPLASH_PHOTOS)) {
    if (cat !== category) {
      for (const p of photos) {
        if (!allPhotos.includes(p)) allPhotos.push(p);
      }
    }
  }

  const seed = slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);

  for (let i = 0; i < allPhotos.length; i++) {
    const idx = (seed + i) % allPhotos.length;
    const url = `https://images.unsplash.com/photo-${allPhotos[idx]}?w=1200&h=630&fit=crop&auto=format&q=80`;
    if (usedImages.has(url)) {
      console.log(`Image ${allPhotos[idx]} already used, skipping...`);
      continue;
    }
    if (await verifyImageUrl(url)) {
      return url;
    }
    console.log(`Image ${allPhotos[idx]} returned 404, trying next...`);
  }

  // Fallback: use picsum.photos with slug seed (always unique, never repeats)
  const fallbackUrl = `https://picsum.photos/seed/${slug}/1200/630`;
  console.log("All Unsplash photos used or unavailable, falling back to picsum.photos");
  return fallbackUrl;
}

async function callQwenAPI(prompt, apiKey) {
  const response = await fetch(
    "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "qwen-plus",
        messages: [
          {
            role: "system",
            content: `You are a Leonardo AI expert and AI art educator writing for leonardoai.vip, a popular tutorial and resource site for Leonardo AI users. Write in English. Your articles are practical, well-structured, and optimized for SEO. You write in a clear, engaging tone — authoritative but approachable. Every article should provide real value to Leonardo AI users, from beginners to advanced creators.`,
          },
          { role: "user", content: prompt },
        ],
        temperature: 0.8,
        max_tokens: 4000,
      }),
    }
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Qwen API error ${response.status}: ${text}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// pickRandomTopic removed — replaced by pickRandomTopicWithDedup

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

// Verify image URL returns 200
async function verifyImageUrl(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok;
  } catch {
    return false;
  }
}

// Old getVerifiedCoverImage kept as internal helper — main flow uses getVerifiedCoverImageWithDedup

function escapeSQL(str) {
  return str.replace(/'/g, "''");
}

async function insertToD1(article, cfToken, accountId, dbId) {
  const sql = `INSERT INTO posts (title, slug, content, excerpt, category, meta_title, meta_description, keywords, cover_image, published_at, updated_at, is_published)
VALUES ('${escapeSQL(article.title)}', '${escapeSQL(article.slug)}', '${escapeSQL(article.content)}', '${escapeSQL(article.excerpt)}', '${escapeSQL(article.category)}', '${escapeSQL(article.metaTitle)}', '${escapeSQL(article.metaDescription)}', '${escapeSQL(article.keywords)}', '${escapeSQL(article.coverImage)}', '${article.publishedAt}', '${article.publishedAt}', 1)`;

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${dbId}/query`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cfToken}`,
      },
      body: JSON.stringify({ sql }),
    }
  );

  const data = await response.json();
  if (!data.success) {
    throw new Error(`D1 insert failed: ${JSON.stringify(data.errors)}`);
  }
  return data;
}

async function main() {
  const apiKey = process.env.QWEN_API_KEY;
  const cfToken = process.env.CLOUDFLARE_API_TOKEN;
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const dbId = process.env.D1_DATABASE_ID;

  if (!apiKey || !cfToken || !accountId || !dbId) {
    console.error(
      "Missing required env vars: QWEN_API_KEY, CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID, D1_DATABASE_ID"
    );
    process.exit(1);
  }

  // Fetch existing articles for dedup
  console.log("Fetching existing articles for dedup...");
  const { usedSubjects, usedImages, usedSlugs } = await fetchExistingArticles(cfToken, accountId, dbId);
  console.log(`Found ${usedSubjects.size} existing articles, ${usedImages.size} used images, ${usedSlugs.size} used slugs`);

  // Pick topic: try predefined pool first, then generate with AI
  let topic = pickRandomTopicFromPool(usedSubjects);
  if (!topic) {
    topic = await generateNewTopic(usedSubjects, apiKey);
  }
  const { category, subject } = topic;
  console.log(`Selected topic: [${category}] ${subject}`);

  const categorySlug = category.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");

  const prompt = `Write a comprehensive, SEO-optimized tutorial article about: "${subject}"

Category: ${category}

Requirements:
1. Title: Create a compelling, specific title (50-60 characters ideal). Do NOT start with "How to" for every article — vary the style.
2. Content: Write 1200-1800 words in Markdown format. Use ## for main sections and ### for subsections.
3. SEO: Naturally mention keywords related to "leonardo ai tutorial", "leonardo ai prompts", and "ai image generation" throughout the article (1-2% keyword density).
4. Internal links: Include 2-3 internal links as markdown: [more tutorials](/blog), [browse ${category} tutorials](/categories/${categorySlug}), or [contact us](/contact).
5. Structure: Introduction (why this matters) → 4-6 main sections with actionable advice → Conclusion with key takeaways.
6. Tone: Professional but conversational. Write as an experienced AI art creator sharing practical knowledge.
7. Do NOT use phrases like "In this article" or "Let's dive in". Start with a strong opening statement.
8. Include practical examples, specific Leonardo AI settings, and step-by-step instructions where relevant.

Return your response in this exact JSON format (no markdown wrapper, just raw JSON):
{
  "title": "The Article Title Here",
  "content": "Full markdown content here...",
  "excerpt": "A 1-2 sentence summary (150-160 chars) that works as a meta description.",
  "metaTitle": "SEO Title | LeonardoAI.VIP (50-60 chars)",
  "metaDescription": "Meta description for search engines (150-160 chars).",
  "keywords": "keyword1,keyword2,keyword3,keyword4,keyword5"
}`;

  console.log("Generating article with Qwen API...");
  let raw = await callQwenAPI(prompt, apiKey);

  // Strip markdown code fences if present
  raw = raw.replace(/^```(?:json)?\s*\n?/, "").replace(/\n?```\s*$/, "");

  let article;
  try {
    article = JSON.parse(raw);
  } catch (e) {
    console.error("Failed to parse Qwen response as JSON:");
    console.error(raw.slice(0, 500));
    process.exit(1);
  }

  const slug = generateSlug(article.title);
  const now = new Date().toISOString();

  // Ensure slug uniqueness — append date suffix if collision
  let finalSlug = slug;
  if (usedSlugs.has(finalSlug)) {
    const dateSuffix = now.slice(0, 10).replace(/-/g, "");
    finalSlug = `${slug}-${dateSuffix}`.slice(0, 100);
    console.log(`Slug collision detected! "${slug}" → "${finalSlug}"`);
  }

  console.log("Verifying cover image (with dedup)...");
  const coverImage = await getVerifiedCoverImageWithDedup(category, finalSlug, usedImages);

  const record = {
    title: article.title,
    slug: finalSlug,
    content: article.content,
    excerpt: article.excerpt,
    category,
    metaTitle: article.metaTitle || `${article.title} | LeonardoAI.VIP`,
    metaDescription: article.metaDescription || article.excerpt,
    keywords: article.keywords,
    coverImage,
    publishedAt: now,
  };

  console.log(`Article: "${record.title}"`);
  console.log(`Category: ${record.category}`);
  console.log(`Slug: ${record.slug}`);
  console.log(`Cover Image: ${record.coverImage}`);
  console.log(`Keywords: ${record.keywords}`);

  console.log("Inserting into D1...");
  await insertToD1(record, cfToken, accountId, dbId);

  console.log(
    `Published successfully: https://leonardoai.vip/blog/${record.slug}`
  );
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
