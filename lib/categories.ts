export const categories = [
  {
    name: "Getting Started",
    slug: "getting-started",
    description:
      "Begin your Leonardo AI journey with beginner-friendly setup guides and practical basics.",
    icon: "\uD83D\uDE80",
    summary:
      "Start here if you are new to Leonardo AI. These tutorials cover account setup, workspace navigation, first-image workflows, tokens, settings, and the mistakes beginners should avoid.",
    keywords: [
      "leonardo ai tutorial",
      "leonardo ai beginner guide",
      "how to use leonardo ai",
    ],
  },
  {
    name: "Prompt Engineering",
    slug: "prompt-engineering",
    description:
      "Master the art of crafting effective prompts for consistent AI-generated images.",
    icon: "\u270D\uFE0F",
    summary:
      "Learn how to write Leonardo AI prompts that produce more predictable composition, lighting, style, character, and commercial-use results.",
    keywords: [
      "leonardo ai prompts",
      "leonardo ai prompt guide",
      "prompt engineering",
    ],
  },
  {
    name: "Image Generation",
    slug: "image-generation",
    description:
      "Explore image generation settings, model choices, quality controls, and workflows.",
    icon: "\uD83C\uDFA8",
    summary:
      "Improve image quality with practical guidance on models, aspect ratios, guidance scale, seeds, upscaling, lighting, color, and repeatable creative systems.",
    keywords: [
      "leonardo ai image generation",
      "ai image generation guide",
      "leonardo ai settings",
    ],
  },
  {
    name: "AI Canvas",
    slug: "ai-canvas",
    description:
      "Use Leonardo AI Canvas for editing, inpainting, outpainting, and compositing.",
    icon: "\uD83D\uDDBC\uFE0F",
    summary:
      "Turn rough generations into finished assets with Canvas tutorials for object removal, background replacement, outpainting, face fixes, and visual compositing.",
    keywords: [
      "leonardo ai canvas",
      "leonardo ai inpainting",
      "leonardo ai outpainting",
    ],
  },
  {
    name: "Video & Motion",
    slug: "video-and-motion",
    description:
      "Create animated content, motion tests, and short visual sequences with Leonardo AI.",
    icon: "\uD83C\uDFAC",
    summary:
      "Understand Leonardo AI motion workflows, camera movement, loopable clips, storyboarding, and when to combine Leonardo AI with other video tools.",
    keywords: [
      "leonardo ai video",
      "leonardo ai motion",
      "ai video generation",
    ],
  },
  {
    name: "Advanced Techniques",
    slug: "advanced-techniques",
    description:
      "Push beyond basics with custom models, references, API workflows, and automation.",
    icon: "\u2699\uFE0F",
    summary:
      "Advanced guides for creators who want more control: LoRA concepts, reference images, API workflows, dataset preparation, and repeatable production pipelines.",
    keywords: [
      "leonardo ai advanced",
      "leonardo ai api",
      "leonardo ai custom models",
    ],
  },
  {
    name: "Style Guides",
    slug: "style-guides",
    description:
      "Achieve specific visual styles from photorealism and product shots to anime and concept art.",
    icon: "\uD83C\uDF1F",
    summary:
      "Use style-specific prompt frameworks for portraits, anime, game assets, architecture, product photography, fantasy worlds, and editorial visuals.",
    keywords: [
      "leonardo ai style guide",
      "leonardo ai anime prompts",
      "leonardo ai photorealistic prompts",
    ],
  },
  {
    name: "Tips & Tricks",
    slug: "tips-and-tricks",
    description:
      "Quick fixes, productivity habits, token-saving tips, and quality checklists.",
    icon: "\uD83D\uDCA1",
    summary:
      "Short, practical Leonardo AI tips for saving tokens, building prompt libraries, improving quality, organizing projects, and speeding up creative work.",
    keywords: [
      "leonardo ai tips",
      "leonardo ai tricks",
      "leonardo ai workflow",
    ],
  },
] as const;

export type Category = (typeof categories)[number];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getCategorySlugByName(name?: string | null): string | undefined {
  if (!name) return undefined;

  return categories.find((category) => category.name === name)?.slug;
}
