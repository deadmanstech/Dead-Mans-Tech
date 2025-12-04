# Dead Mans Tech – Official Website

## Overview
Dead Mans Tech is a SaaS company delivering innovative software solutions. This repository contains the source code for the official website built with Next.js 14.

## Technology Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Database & Auth:** Supabase (PostgreSQL, Supabase Auth)
- **Deployment:** Vercel (recommended)

## Features
- Responsive design with dark‑mode support
- Animated UI elements and transitions
- Integrated blog with admin panel
- Secure authentication for admin access
- SEO‑optimized pages
- Analytics ready

## Getting Started

### Prerequisites
- Node.js ≥ 18
- npm or pnpm
- Supabase account

### Installation
```bash
git clone <repository-url>
cd Website
npm install
```

### Environment Configuration
Create a `.env.local` file in the project root:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development
```bash
npm run dev
```
Open <http://localhost:3000> in a browser.

## Project Structure
```
app/                # Next.js app routes
  ├── about/
  ├── admin/
  ├── blog/
  ├── careers/
  ├── contact/
  ├── cookies/
  ├── privacy/
  ├── products/
  ├── security/
  ├── terms/
  └── page.tsx      # Home page
components/         # Reusable React components
lib/                # Utilities and data access
  ├── supabase/
  ├── blog-db.ts
  └── data.ts
public/             # Static assets
styles/             # Global CSS
```

## Database Schema
The `blog_posts` table is defined as follows:
```sql
create table blog_posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text unique not null,
  excerpt text not null,
  content text not null,
  category text not null,
  author text not null,
  image text,
  read_time text not null,
  published boolean default false,
  featured boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  user_id uuid references auth.users(id)
);

alter table blog_posts enable row level security;

create policy "Public posts are viewable by everyone"
  on blog_posts for select
  using (published = true);

create policy "Users can insert their own posts"
  on blog_posts for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own posts"
  on blog_posts for update
  using (auth.uid() = user_id);

create policy "Users can delete their own posts"
  on blog_posts for delete
  using (auth.uid() = user_id);
```

## Admin Access
1. Register a user in Supabase Auth.
2. Navigate to `/admin/login` and sign in.
3. Access the admin dashboard at `/admin`.

## Deployment
### Vercel (recommended)
1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Add the environment variables defined above.
4. Deploy.

### Alternative Platforms
The application can be deployed on any platform supporting Next.js (Netlify, Railway, AWS Amplify, Docker, etc.).

## Scripts
- `npm run dev` – Start development server
- `npm run build` – Build production assets
- `npm start` – Run production server
- `npm run lint` – Lint source code

## Contributing
Contributions are welcome. Please open issues or pull requests following the standard GitHub workflow.

## Contact
For inquiries, email: [officialdeadmanstech@gmail.com](mailto:officialdeadmanstech@gmail.com)

## License
© 2025 Dead Mans Tech. All rights reserved.
