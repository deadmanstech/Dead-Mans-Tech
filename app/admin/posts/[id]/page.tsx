import { redirect, notFound } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { getPostById } from "@/lib/blog-db"
import { PostEditor } from "@/components/admin/post-editor"

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  const post = await getPostById(id)

  if (!post) {
    notFound()
  }

  return <PostEditor post={post} userId={user.id} />
}
