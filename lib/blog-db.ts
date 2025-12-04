import { createClient, createStaticClient } from "@/lib/supabase/server"

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  author: string
  image: string
  read_time: string
  published: boolean
  featured: boolean
  created_at: string
  updated_at: string
  user_id: string
}

export type BlogPostInsert = Omit<BlogPost, "id" | "created_at" | "updated_at">
export type BlogPostUpdate = Partial<Omit<BlogPost, "id" | "created_at" | "user_id">>

// Get all published posts (public)
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const supabase = await createStaticClient()
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching published posts:", error)
    return []
  }

  return data || []
}

// Get a single post by slug (public)
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = await createStaticClient()
  const { data, error } = await supabase.from("blog_posts").select("*").eq("slug", slug).eq("published", true).single()

  if (error) {
    console.error("Error fetching post:", error)
    return null
  }

  return data
}

// Get featured post (public)
export async function getFeaturedPost(): Promise<BlogPost | null> {
  const supabase = await createStaticClient()
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .eq("featured", true)
    .order("created_at", { ascending: false })
    .limit(1)
    .single()

  if (error) {
    // No featured post found, return null
    return null
  }

  return data
}

// Get posts by category (public)
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const supabase = await createStaticClient()
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .eq("category", category)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching posts by category:", error)
    return []
  }

  return data || []
}

// Get unique categories from published posts
export async function getCategories(): Promise<string[]> {
  const supabase = await createStaticClient()
  const { data, error } = await supabase.from("blog_posts").select("category").eq("published", true)

  if (error) {
    console.error("Error fetching categories:", error)
    return []
  }

  const categories = [...new Set(data?.map((p) => p.category) || [])]
  return categories
}

// Admin: Get all posts (including unpublished)
export async function getAllPosts(): Promise<BlogPost[]> {
  const supabase = await createClient()
  const { data, error } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching all posts:", error)
    return []
  }

  return data || []
}

// Admin: Get post by ID
export async function getPostById(id: string): Promise<BlogPost | null> {
  const supabase = await createClient()
  const { data, error } = await supabase.from("blog_posts").select("*").eq("id", id).single()

  if (error) {
    console.error("Error fetching post by id:", error)
    return null
  }

  return data
}

// Admin: Create a new post
export async function createPost(post: BlogPostInsert): Promise<BlogPost | null> {
  const supabase = await createClient()
  const { data, error } = await supabase.from("blog_posts").insert(post).select().single()

  if (error) {
    console.error("Error creating post:", error)
    return null
  }

  return data
}

// Admin: Update a post
export async function updatePost(id: string, updates: BlogPostUpdate): Promise<BlogPost | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("blog_posts")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single()

  if (error) {
    console.error("Error updating post:", error)
    return null
  }

  return data
}

// Admin: Delete a post
export async function deletePost(id: string): Promise<boolean> {
  const supabase = await createClient()
  const { error } = await supabase.from("blog_posts").delete().eq("id", id)

  if (error) {
    console.error("Error deleting post:", error)
    return false
  }

  return true
}
