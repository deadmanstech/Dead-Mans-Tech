import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { PostEditor } from "@/components/admin/post-editor"

export default async function NewPostPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  return <PostEditor userId={user.id} />
}
