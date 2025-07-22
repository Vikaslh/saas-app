# Converso – Real-time AI Teaching Platform

Converso is a Next.js App Router project that enables users to build, personalize, and interact with AI-powered learning companions using real-time voice conversations. It leverages Clerk for authentication, Supabase for data storage, and Vapi for voice AI.

---

## Features

- **Clerk Authentication**: Secure sign-in, sign-up, and user management.
- **Supabase Integration**: Store and retrieve companion data.
- **Vapi Voice AI**: Real-time, interactive voice sessions with AI companions.
- **Dynamic Companions**: Create, filter, and search for learning companions by subject, topic, and more.
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Vikaslh/saas-app.git
cd saas-app/project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the `project` directory with the following (replace with your actual keys):

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_own_key
CLERK_SECRET_KEY=your_own_key
NEXT_PUBLIC_SUPABASE_URL=your_own_key
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_token
```

> **Tip:** You can use `.env.example` as a template for your environment variables.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Deployment

### Deploying to Vercel

1. **Push your code to GitHub, GitLab, or Bitbucket.**
2. **Create a new project on [Vercel](https://vercel.com/)** and import your repository.
3. **Set environment variables** in the Vercel dashboard using the keys from `.env.example`.
4. **Build and deploy:** Vercel will automatically install dependencies and run `next build`.
5. **Static assets:** All icons and images are in the `public/` directory and will be served automatically.
6. **Custom domains, analytics, and more** can be configured in the Vercel dashboard.

### Best Practices
- Do not commit your real `.env.local` file to version control.
- Use the provided `.env.example` as a reference for required environment variables.
- Ensure all static assets (icons, images) are present in `public/` before deploying.
- For custom robots.txt or sitemap.xml, add them to the `public/` directory.
- Review your `next.config.ts` for any production-specific settings.

---

## Clerk Authentication Setup

- **Middleware**: See `middleware.ts` for Clerk's `clerkMiddleware()` usage.
- **Provider**: The app is wrapped with `<ClerkProvider>` in `app/layout.tsx`.
- **UI Components**: Uses `<SignInButton>`, `<SignUpButton>`, `<UserButton>`, `<SignedIn>`, and `<SignedOut>` for authentication flows.
- **Custom Sign-In Page**: Located at `app/sign-in/[[...sign-in]]/page.tsx`.

---

## Supabase Integration

- **Client Setup**: See `lib/supabase.ts` for the Supabase client, which uses Clerk's JWT for RLS.
- **Data Actions**: All companion CRUD actions are in `lib/actions/companion.actions.ts`.

---

## Vapi Voice AI

- **SDK Setup**: See `lib/vapi.sdk.ts` for Vapi client initialization.
- **Voice Sessions**: The `CompanionComponent` handles real-time voice interaction.

---

## UI Components

- All UI components are in `components/` and `components/ui/`.
- Uses shadcn/ui for form, table, input, select, textarea, and more.

---

## Project Structure

```
project/
  app/                # Next.js App Router pages and layouts
  components/         # Shared and UI components
  constants/          # App-wide constants (subjects, colors, etc.)
  lib/                # Utility functions, Supabase, Clerk, Vapi SDK, server actions
  public/             # Static assets (icons, images)
  types/              # TypeScript type definitions
  middleware.ts       # Clerk middleware
  package.json        # Project dependencies and scripts
  ...
```

---

## Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run start` – Start the production server
- `npm run lint` – Lint the codebase

---

## License

MIT
