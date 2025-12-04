import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    const supabase = await createClient()

    // Check authentication
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()

    const { data, error } = await supabase
      .from("blog_posts")
      .insert({
        title: body.title,
        slug: body.slug,
        excerpt: body.excerpt,
        content: body.content,
        category: body.category,
        author: body.author,
        image: body.image,
        read_time: body.read_time,
        published: body.published,
        featured: body.featured,
        user_id: user.id,
      })
      .select()
      .single()

    if (error) {
      console.error("Error creating post:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in POST /api/admin/posts:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
