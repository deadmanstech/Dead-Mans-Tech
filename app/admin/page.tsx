import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { getAllPosts } from "@/lib/blog-db"
import { AdminDashboard } from "@/components/admin/admin-dashboard"

export default async function AdminPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  const posts = await getAllPosts()

  return <AdminDashboard posts={posts} userEmail={user.email || ""} />
}
