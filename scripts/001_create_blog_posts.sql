-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  author TEXT NOT NULL,
  image TEXT DEFAULT '/placeholder.svg?height=400&width=600',
  read_time TEXT DEFAULT '5 min read',
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read published posts
CREATE POLICY "Public can view published posts" 
ON blog_posts FOR SELECT 
USING (published = true);

-- Policy: Authenticated users can view all posts (for admin)
CREATE POLICY "Authenticated users can view all posts" 
ON blog_posts FOR SELECT 
TO authenticated 
USING (true);

-- Policy: Authenticated users can insert posts
CREATE POLICY "Authenticated users can insert posts" 
ON blog_posts FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = user_id);

-- Policy: Authenticated users can update their own posts
CREATE POLICY "Authenticated users can update posts" 
ON blog_posts FOR UPDATE 
TO authenticated 
USING (auth.uid() = user_id);

-- Policy: Authenticated users can delete their own posts
CREATE POLICY "Authenticated users can delete posts" 
ON blog_posts FOR DELETE 
TO authenticated 
USING (auth.uid() = user_id);

-- Create index for faster slug lookups
CREATE INDEX IF NOT EXISTS blog_posts_slug_idx ON blog_posts(slug);

-- Create index for faster category filtering
CREATE INDEX IF NOT EXISTS blog_posts_category_idx ON blog_posts(category);

-- Create index for published posts
CREATE INDEX IF NOT EXISTS blog_posts_published_idx ON blog_posts(published);
