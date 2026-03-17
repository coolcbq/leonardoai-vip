-- Posts table
CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  category TEXT,
  cover_image TEXT,
  meta_title TEXT,
  meta_description TEXT,
  keywords TEXT,
  published_at TEXT,
  updated_at TEXT DEFAULT (datetime('now')),
  is_published INTEGER DEFAULT 0
);

CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_posts_published ON posts(is_published, published_at);
CREATE INDEX idx_posts_category ON posts(category, is_published);

-- Contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now')),
  is_read INTEGER DEFAULT 0
);

-- Friend Links table
CREATE TABLE IF NOT EXISTS friend_links (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  description TEXT,
  logo_url TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active INTEGER DEFAULT 1,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE INDEX idx_friend_links_active ON friend_links(is_active, sort_order);

-- Seed data: Friend Links
INSERT INTO friend_links (title, url, description, sort_order, is_active, created_at) VALUES
('Rao Edits', 'https://raoedits.top', 'Creative digital content and editing services.', 1, 1, '2026-01-01'),
('Jobe23', 'https://jobe23.com', 'Professional career and talent solutions.', 2, 1, '2026-01-01'),
('AI Detector', 'https://aidetector.ink', 'Advanced AI content detection platform.', 3, 1, '2026-01-01'),
('Cluely', 'https://cluely.cc', 'Smart tools for modern professionals.', 4, 1, '2026-01-01'),
('Cluely AI', 'https://cluelyai.net', 'AI-powered productivity and business solutions.', 5, 1, '2026-01-01');

-- Seed data: Blog posts
INSERT INTO posts (title, slug, content, excerpt, category, meta_title, meta_description, keywords, published_at, is_published) VALUES
(
  'Getting Started with Leonardo AI: A Complete Beginner''s Guide',
  'getting-started-with-leonardo-ai',
  '## Your First Steps with Leonardo AI

Leonardo AI is one of the most powerful AI image generation platforms available today. Whether you are an artist, designer, marketer, or simply curious about AI art, Leonardo AI offers an intuitive interface and incredible capabilities to bring your creative visions to life.

### What Is Leonardo AI?

Leonardo AI is an advanced AI image generation platform that uses state-of-the-art diffusion models to create stunning images from text descriptions. Unlike basic AI art tools, Leonardo AI provides professional-grade features including custom model training, real-time canvas editing, and a vast library of community-created models.

### Creating Your Account

Getting started with Leonardo AI is straightforward. Visit leonardo.ai and sign up for a free account. The free tier provides a generous daily token allowance, letting you experiment with image generation without any upfront cost. Premium plans unlock additional features like higher resolution outputs and priority processing.

### Understanding the Dashboard

Once logged in, you will find the main dashboard organized into several key sections:

- **AI Image Generation**: The core tool for creating images from text prompts
- **AI Canvas**: An interactive editor for inpainting, outpainting, and real-time editing
- **Motion**: Transform static images into short video animations
- **Model Library**: Browse and select from hundreds of fine-tuned models

### Your First Image Generation

To generate your first image, navigate to the AI Image Generation tool. Here is a step-by-step process:

1. **Select a model**: Choose from Leonardo''s own models like Leonardo Phoenix or community fine-tuned models
2. **Write your prompt**: Describe the image you want to create in detail
3. **Adjust settings**: Set the number of images, aspect ratio, and guidance scale
4. **Generate**: Click the generate button and watch your creation come to life

### Tips for Beginners

Start with simple, descriptive prompts and gradually add more detail as you learn how different words affect the output. Experiment with different models to find which ones best match your artistic style. Use the community feed for inspiration and to learn from other creators'' prompts.

### Next Steps

Once comfortable with basic generation, explore advanced features like ControlNet for pose-guided generation, the AI Canvas for precise editing, and prompt engineering techniques to achieve exactly the results you envision.',
  'Learn how to get started with Leonardo AI from scratch. This complete beginner''s guide covers account setup, dashboard navigation, your first image generation, and essential tips.',
  'Getting Started',
  'Getting Started with Leonardo AI: Complete Beginner''s Guide | LeonardoAI.VIP',
  'Learn how to get started with Leonardo AI. Complete beginner''s guide covering account setup, first image generation, dashboard overview, and essential tips for new users.',
  'leonardo ai,getting started,beginner guide,ai image generation,leonardo ai tutorial,ai art',
  '2026-03-01',
  1
),
(
  'Leonardo AI Prompt Engineering Basics: Write Better Prompts',
  'leonardo-ai-prompt-engineering-basics',
  '## Mastering Prompt Engineering for Leonardo AI

Prompt engineering is the art and science of crafting text descriptions that guide AI models to produce exactly the images you envision. In Leonardo AI, a well-written prompt can mean the difference between a mediocre result and a breathtaking masterpiece.

### Why Prompt Engineering Matters

The prompt is your primary communication channel with the AI model. Every word, phrase, and modifier you include shapes the final output. Understanding how to structure your prompts effectively is the single most important skill for getting professional results from Leonardo AI.

### Anatomy of a Great Prompt

A well-structured Leonardo AI prompt typically includes these components:

1. **Subject**: The main focus of your image (e.g., "a majestic dragon")
2. **Setting/Environment**: Where the scene takes place (e.g., "perched on a mountain peak")
3. **Style/Medium**: The artistic style (e.g., "digital painting, concept art")
4. **Lighting**: How the scene is illuminated (e.g., "golden hour lighting, dramatic shadows")
5. **Quality modifiers**: Technical quality terms (e.g., "highly detailed, 8k resolution")

### Effective Prompt Techniques

#### Be Specific, Not Vague

Instead of "a beautiful landscape," try "a misty mountain valley at dawn with pine forests, a winding river reflecting orange sunrise colors, volumetric fog between the peaks, cinematic wide-angle shot."

#### Use Style References

Incorporate artistic style keywords like "in the style of Studio Ghibli," "oil painting texture," "photorealistic," or "watercolor illustration" to guide the aesthetic direction.

#### Leverage Quality Boosters

Terms like "masterpiece," "highly detailed," "professional photography," "award-winning," and "8k ultra HD" signal to the model that you want high-quality output.

#### Negative Prompts

Leonardo AI supports negative prompts — descriptions of what you do NOT want in your image. Common negative prompt entries include "blurry, low quality, distorted, deformed hands, extra fingers, watermark, text."

### Prompt Length and Structure

While there is no strict character limit, prompts between 50-150 words tend to perform best. Front-load the most important elements, as earlier words in the prompt generally carry more weight with the model.

### Common Mistakes to Avoid

1. **Being too vague**: "Cool picture" gives the AI nothing to work with
2. **Contradictory descriptions**: Avoid conflicting style or mood instructions
3. **Ignoring negative prompts**: Always use negative prompts to exclude unwanted elements
4. **Not experimenting**: Try multiple variations of the same concept

### Practice Makes Perfect

The best way to improve your prompt engineering skills is through consistent practice. Generate multiple variations, compare results, and refine your approach over time. Study the community feed to see what prompts produce stunning results.',
  'Master the art of prompt engineering for Leonardo AI. Learn prompt structure, effective techniques, quality boosters, negative prompts, and common mistakes to avoid.',
  'Prompt Engineering',
  'Leonardo AI Prompt Engineering Basics: Write Better Prompts | LeonardoAI.VIP',
  'Learn prompt engineering basics for Leonardo AI. Master prompt structure, style references, quality modifiers, negative prompts, and techniques for stunning AI-generated images.',
  'leonardo ai prompts,prompt engineering,ai art prompts,leonardo ai tips,text to image,ai image generation',
  '2026-03-05',
  1
),
(
  'Image Generation Models Compared: Which Leonardo AI Model to Use',
  'image-generation-models-compared',
  '## Choosing the Right Leonardo AI Model

Leonardo AI offers a diverse library of image generation models, each with unique strengths and specialties. Selecting the right model for your project can dramatically improve your results. This guide compares the most popular models to help you make informed choices.

### Understanding AI Image Models

Each model in Leonardo AI has been trained on different datasets and optimized for specific types of imagery. Some excel at photorealism, others at anime-style art, and others at architectural visualization. Knowing their strengths helps you match the right tool to your creative vision.

### Leonardo Phoenix

Leonardo Phoenix is the platform''s flagship model, designed for versatility and high-quality output across a wide range of styles.

- **Best for**: General-purpose image generation, concept art, illustrations
- **Strengths**: Excellent prompt adherence, versatile style range, consistent quality
- **Resolution**: Supports high-resolution outputs up to 1536x1536
- **Speed**: Moderate generation time with excellent results

### Leonardo Diffusion XL

Built on the SDXL architecture, Leonardo Diffusion XL delivers photorealistic images with remarkable detail.

- **Best for**: Photorealistic scenes, product photography, portraits
- **Strengths**: Exceptional realism, fine detail rendering, natural lighting
- **Resolution**: Optimized for 1024x1024 and similar aspect ratios
- **Speed**: Standard generation time

### Leonardo Anime XL

Purpose-built for anime and manga-style artwork, this model captures the distinctive aesthetics of Japanese animation.

- **Best for**: Anime characters, manga illustrations, visual novel art
- **Strengths**: Authentic anime aesthetics, vibrant colors, expressive characters
- **Resolution**: Best at standard anime aspect ratios
- **Speed**: Fast generation with consistent style

### Community Fine-Tuned Models

Leonardo AI''s model library includes thousands of community-created fine-tuned models, each specialized for specific niches:

- **Architecture models**: Optimized for building and interior design visualization
- **Character models**: Fine-tuned for consistent character design
- **Landscape models**: Specialized in natural and fantasy environments
- **Product models**: Designed for commercial product photography

### How to Choose the Right Model

Follow these guidelines when selecting a model:

1. **Define your goal**: What type of image do you need?
2. **Match the style**: Choose a model trained on similar content
3. **Test and compare**: Generate the same prompt across multiple models
4. **Check community ratings**: Higher-rated models tend to produce better results
5. **Consider resolution needs**: Some models perform better at specific resolutions

### Model Settings and Parameters

Beyond model selection, adjusting these parameters affects your results:

- **Guidance Scale**: Higher values (7-12) follow prompts more closely; lower values (3-6) allow more creative freedom
- **Steps**: More steps generally mean more detail but slower generation
- **Seed**: Use fixed seeds to reproduce results or compare model differences

### Conclusion

There is no single "best" model in Leonardo AI — the ideal choice depends entirely on your project requirements. Experiment with different models, save your favorites, and build a personal workflow that leverages each model''s unique strengths.',
  'Compare the top Leonardo AI image generation models. Learn the strengths of Leonardo Phoenix, Diffusion XL, Anime XL, and community models to choose the right one for your project.',
  'AI Models',
  'Image Generation Models Compared: Which Leonardo AI Model to Use | LeonardoAI.VIP',
  'Compare Leonardo AI image generation models including Phoenix, Diffusion XL, and Anime XL. Learn which model is best for your creative projects and how to optimize settings.',
  'leonardo ai models,ai image generation,leonardo phoenix,diffusion xl,anime xl,ai art models,model comparison',
  '2026-03-10',
  1
);
