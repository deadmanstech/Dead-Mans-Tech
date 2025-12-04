"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { FileText, Plus, MoreHorizontal, Edit, Trash2, Eye, EyeOff, Star, LogOut, Home } from "lucide-react"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog-db"

interface AdminDashboardProps {
  posts: BlogPost[]
  userEmail: string
}

export function AdminDashboard({ posts: initialPosts, userEmail }: AdminDashboardProps) {
  const [posts, setPosts] = useState(initialPosts)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/admin/login")
    router.refresh()
  }

  const handleDelete = async () => {
    if (!deleteId) return
    setIsDeleting(true)

    try {
      const response = await fetch(`/api/admin/posts/${deleteId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setPosts(posts.filter((p) => p.id !== deleteId))
      }
    } catch (error) {
      console.error("Error deleting post:", error)
    } finally {
      setIsDeleting(false)
      setDeleteId(null)
    }
  }

  const togglePublished = async (post: BlogPost) => {
    try {
      const response = await fetch(`/api/admin/posts/${post.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !post.published }),
      })

      if (response.ok) {
        setPosts(posts.map((p) => (p.id === post.id ? { ...p, published: !p.published } : p)))
      }
    } catch (error) {
      console.error("Error toggling publish status:", error)
    }
  }

  const toggleFeatured = async (post: BlogPost) => {
    try {
      const response = await fetch(`/api/admin/posts/${post.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ featured: !post.featured }),
      })

      if (response.ok) {
        setPosts(posts.map((p) => (p.id === post.id ? { ...p, featured: !p.featured } : p)))
      }
    } catch (error) {
      console.error("Error toggling featured status:", error)
    }
  }

  const publishedCount = posts.filter((p) => p.published).length
  const draftCount = posts.filter((p) => !p.published).length

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <span className="font-semibold hidden sm:inline">Dead Mans Tech Admin</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden sm:inline">{userEmail}</span>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">View Site</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold">Blog Posts</h1>
              <p className="text-muted-foreground mt-1">Manage your blog content</p>
            </div>
            <Button asChild>
              <Link href="/admin/posts/new">
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Link>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold">{posts.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Published</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold text-green-600">{publishedCount}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Drafts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold text-amber-600">{draftCount}</p>
              </CardContent>
            </Card>
          </div>

          {/* Posts List */}
          {posts.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-16">
                <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No posts yet</h3>
                <p className="text-muted-foreground mb-4">Get started by creating your first blog post</p>
                <Button asChild>
                  <Link href="/admin/posts/new">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Post
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {posts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1 min-w-0 mr-4">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-medium truncate">{post.title}</h3>
                          {post.featured && (
                            <Badge variant="secondary" className="shrink-0">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                          <Badge variant={post.published ? "default" : "outline"} className="shrink-0">
                            {post.published ? "Published" : "Draft"}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                          <span>{post.category}</span>
                          <span>•</span>
                          <span>{new Date(post.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/posts/${post.id}`}>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => togglePublished(post)}>
                            {post.published ? (
                              <>
                                <EyeOff className="h-4 w-4 mr-2" />
                                Unpublish
                              </>
                            ) : (
                              <>
                                <Eye className="h-4 w-4 mr-2" />
                                Publish
                              </>
                            )}
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toggleFeatured(post)}>
                            <Star className="h-4 w-4 mr-2" />
                            {post.featured ? "Unfeature" : "Feature"}
                          </DropdownMenuItem>
                          {post.published && (
                            <DropdownMenuItem asChild>
                              <Link href={`/blog/${post.slug}`} target="_blank">
                                <Eye className="h-4 w-4 mr-2" />
                                View Live
                              </Link>
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem className="text-red-600" onClick={() => setDeleteId(post.id)}>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </main>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Post</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this post? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700" disabled={isDeleting}>
              {isDeleting ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
