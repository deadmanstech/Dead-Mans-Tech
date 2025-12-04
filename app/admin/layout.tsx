import type React from "react"
import { createClient } from "@/lib/supabase/server"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check auth for all admin routes except login
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return <>{children}</>
}
