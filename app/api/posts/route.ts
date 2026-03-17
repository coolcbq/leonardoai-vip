import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { posts } from "@/lib/schema";
import { eq, desc, and, count } from "drizzle-orm";

const POSTS_PER_PAGE = 10;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const category = searchParams.get("category");
    const offset = (page - 1) * POSTS_PER_PAGE;

    const db = await getDb();

    const whereConditions = category
      ? and(eq(posts.isPublished, 1), eq(posts.category, category))
      : eq(posts.isPublished, 1);

    const [allPosts, totalResult] = await Promise.all([
      db
        .select()
        .from(posts)
        .where(whereConditions)
        .orderBy(desc(posts.publishedAt))
        .limit(POSTS_PER_PAGE)
        .offset(offset),
      db
        .select({ total: count() })
        .from(posts)
        .where(whereConditions),
    ]);

    const total = totalResult[0]?.total || 0;

    return NextResponse.json({
      posts: allPosts,
      pagination: {
        page,
        perPage: POSTS_PER_PAGE,
        total,
        totalPages: Math.ceil(total / POSTS_PER_PAGE),
      },
    });
  } catch (error) {
    console.error("Posts API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
