"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Save, Eye } from "lucide-react"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog-db"
import { MarkdownRenderer } from "@/components/markdown-renderer"

interface PostEditorProps {
  post?: BlogPost
  userId: string
}

const categories = ["Technology", "Product Updates", "Engineering", "Design", "Company News", "Tutorials"]

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function PostEditor({ post, userId }: PostEditorProps) {
  const router = useRouter()
  const isEditing = !!post

  const [formData, setFormData] = useState({
    title: post?.title || "",
    slug: post?.slug || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    category: post?.category || "Technology",
    author: post?.author || "",
    image: post?.image || "/placeholder.svg?height=400&width=600",
    read_time: post?.read_time || "5 min read",
    published: post?.published || false,
    featured: post?.featured || false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showPreview, setShowPreview] = useState(false)

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: isEditing ? formData.slug : generateSlug(title),
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const url = isEditing ? `/api/admin/posts/${post.id}` : "/api/admin/posts"

      const method = isEditing ? "PATCH" : "POST"

      const body = isEditing ? formData : { ...formData, user_id: userId }

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to save post")
      }

      router.push("/admin")
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/admin">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Link>
              </Button>
              <span className="text-muted-foreground">{isEditing ? "Edit Post" : "New Post"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setShowPreview(!showPreview)}>
                <Eye className="h-4 w-4 mr-2" />
                {showPreview ? "Editor" : "Preview"}
              </Button>
              <Button size="sm" onClick={handleSubmit} disabled={isSubmitting}>
                <Save className="h-4 w-4 mr-2" />
                {isSubmitting ? "Saving..." : "Save"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {error && <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">{error}</div>}

          {showPreview ? (
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <article className="max-w-3xl">
                  <h1 className="text-3xl font-bold mb-4">{formData.title || "Untitled"}</h1>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                    <span>{formData.author || "Author"}</span>
                    <span>•</span>
                    <span>{formData.category}</span>
                    <span>•</span>
                    <span>{formData.read_time}</span>
                  </div>
                  <p className="text-lg text-muted-foreground mb-8">{formData.excerpt}</p>
                  <MarkdownRenderer content={formData.content} />
                </article>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Content</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => handleTitleChange(e.target.value)}
                          placeholder="Enter post title"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="slug">Slug</Label>
                        <Input
                          id="slug"
                          value={formData.slug}
                          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                          placeholder="post-url-slug"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="excerpt">Excerpt</Label>
                        <Textarea
                          id="excerpt"
                          value={formData.excerpt}
                          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                          placeholder="Brief description of the post"
                          rows={3}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="content">Content (Markdown)</Label>
                        <Textarea
                          id="content"
                          value={formData.content}
                          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                          placeholder="Write your post content in Markdown..."
                          rows={20}
                          className="font-mono text-sm"
                          required
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="published">Published</Label>
                        <Switch
                          id="published"
                          checked={formData.published}
                          onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <Label htmlFor="featured">Featured</Label>
                        <Switch
                          id="featured"
                          checked={formData.featured}
                          onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="author">Author</Label>
                        <Input
                          id="author"
                          value={formData.author}
                          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                          placeholder="Author name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) => setFormData({ ...formData, category: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((cat) => (
                              <SelectItem key={cat} value={cat}>
                                {cat}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="read_time">Read Time</Label>
                        <Input
                          id="read_time"
                          value={formData.read_time}
                          onChange={(e) => setFormData({ ...formData, read_time: e.target.value })}
                          placeholder="5 min read"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="image">Cover Image URL</Label>
                        <Input
                          id="image"
                          value={formData.image}
                          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                          placeholder="/placeholder.svg?height=400&width=600"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </main>
    </div>
  )
}
