import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const posts = sqliteTable("posts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  category: text("category"),
  coverImage: text("cover_image"),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  keywords: text("keywords"),
  publishedAt: text("published_at"),
  updatedAt: text("updated_at"),
  isPublished: integer("is_published").default(0),
});

export const friendLinks = sqliteTable("friend_links", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  url: text("url").notNull(),
  description: text("description"),
  logoUrl: text("logo_url"),
  sortOrder: integer("sort_order").default(0),
  isActive: integer("is_active").default(1),
  createdAt: text("created_at"),
});

export const contacts = sqliteTable("contacts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: text("created_at"),
  isRead: integer("is_read").default(0),
});

export const subscribers = sqliteTable("subscribers", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull().unique(),
  subscribedAt: text("subscribed_at"),
});
