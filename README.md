<div align="center">
<img src="https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/DaisyUI-4.12-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white" />
<img src="https://img.shields.io/badge/BetterAuth-1.2-F59E0B?style=for-the-badge" />
<img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
<br/><br/>
 
# ☀️ SunCart
 
### *Your One-Stop Summer Essentials Store*
 
> A modern, fully responsive eCommerce platform for summer lovers — featuring sunglasses, beachwear, skincare, and beach accessories with seamless authentication and a stunning warm-dark UI.
 
<br/>
**[🌐 Live Demo](https://suncart.vercel.app/)
 
<br/>
 
</div>
---
 
## 📖 Table of Contents
 
- [About The Project](#-about-the-project)
- [Live URL](#-live-url)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [NPM Packages](#-npm-packages)
- [Project Structure](#-project-structure)
- [Pages & Routes](#-pages--routes)
- [Authentication Flow](#-authentication-flow)
- [Environment Variables](#-environment-variables)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
---
 
## 🌞 About The Project
 
**SunCart** is a full-stack summer eCommerce web application built with **Next.js 15 App Router**. It allows users to browse a curated catalog of summer essentials — including sunglasses, clothing, skincare products, and beach accessories — and view detailed product information after authenticating.
 
The project showcases:
- A unique **warm-dark summer aesthetic** with glassmorphism effects, gold accents, and animated hero banners
- **Secure authentication** via BetterAuth supporting both email/password and Google OAuth
- **Protected routes** that redirect unauthenticated users to login and bring them back afterward
- **Fully responsive** layout across mobile, tablet, and desktop viewports
- Smooth **Animate.css** transitions and scroll-reveal animations throughout
---
 
## 🚀 Live URL
 
> 🔗 **[https://suncart.vercel.app](https://suncart.vercel.app)**
 
---
 
## ✨ Features
 
### 🏠 Home Page
- **Animated Hero Slider** — 3-slide auto-advancing banner showcasing summer sales ("50% OFF", "Hot Deals 🔥", "New Arrivals") with smooth fade transitions, dot navigation, and prev/next controls
- **Popular Products Section** — Displays 3 hand-picked top-rated products from the catalog with image, name, rating, price, and a View Details button
- **Summer Care Tips** — 4 expert cards covering SPF protection, hydration, after-sun care, and shade-seeking advice with animated icons
- **Top Brands Showcase** — 4 brand cards (SunShade, BreezeCo, GlowGuard, WaveRider) with hover animations
- **Summer CTA Banner** — Eye-catching call-to-action section with animated background glows and a direct link to the products page
- **Scroll-Reveal Animations** — Sections animate in as they enter the viewport using IntersectionObserver
### 🛍️ Products Page
- **Full Product Catalog** — Displays all 8 summer products in a responsive grid (1 → 2 → 3 → 4 columns)
- **Live Search** — Instantly filters products by name, brand, or category as you type
- **Category Filter** — One-click filter tabs: All, Accessories, Clothing, Skincare, Beach Accessories
- **Sort Options** — Sort by Default, Price (Low → High), Price (High → Low), or Top Rated
- **Empty State** — Friendly "no results" screen with a Clear Filters button if nothing matches
- **Staggered Animations** — Product cards animate in with a cascade delay on load
### 🔍 Product Detail Page *(Protected)*
- **Authentication Guard** — Inaccessible without login; unauthenticated users are redirected to `/login?redirect=/products/:id` and returned to the product after signing in
- **Full Product Information** — Displays product image, brand, category, name, star rating (with review count), price with original price crossed out, discount savings badge, full description, and feature tags
- **Stock Indicator** — Shows "In Stock" (green) or "Only N left!" (orange) dynamically
- **Add to Cart Button** — Triggers a toast confirmation notification
- **Trust Badges** — Secure Payment, Free Shipping, 30-Day Returns icons
- **Back Navigation** — Breadcrumb link back to the products listing
### 🔐 Login Page
- **Email & Password Login** — Clean form with email and password fields and a Login button
- **Show/Hide Password** — Toggle button on the password field
- **Google OAuth** — One-click "Continue with Google" button using BetterAuth social provider
- **Error Handling** — Displays toast notifications for invalid credentials or server errors
- **Redirect Preservation** — After login, the user is sent back to the page they originally tried to visit
- **Register Link** — Quick navigation link to the Register page
### 📝 Register Page
- **Registration Form** — Fields for Full Name, Email, Photo URL (optional), and Password
- **Password Validation** — Enforces a minimum of 6 characters with inline error toasts
- **Photo URL Preview** — Optional profile image URL stored at registration
- **Google OAuth** — Same one-click Google sign-up flow
- **Success Flow** — On successful registration, navigates to the Login page
- **Login Link** — Quick navigation link for existing users
### 👤 My Profile Page *(Protected)*
- **User Avatar** — Shows profile photo if available; falls back to a gradient initial avatar
- **Account Details** — Displays Full Name, Email Address, and Member Since date
- **Online Indicator** — Green dot status badge on the avatar
- **Email Verified Badge** — Shield icon shown for verified accounts
- **Update Profile Button** — Navigates to the profile update route
- **Logout Button** — Signs out and redirects to home with a goodbye toast
- **Quick Actions Panel** — Shortcut cards to Browse Products and Update Profile
### ✏️ Update Profile Page *(Protected)*
- **Name Field** — Edit your display name with live preview
- **Photo URL Field** — Update your profile picture via a direct image URL
- **Live Avatar Preview** — The avatar at the top updates in real time as you type a new image URL
- **Error Fallback** — If the image URL is broken, it gracefully falls back to the initial avatar
- **Save / Cancel** — Two-button row: Cancel returns to profile, Save calls BetterAuth `updateUser`
### 🔝 Navbar
- **Fixed / Sticky** — Floats transparently at the top, switches to a frosted glass style on scroll
- **Logo** — Animated sun icon with a glow effect and rotating hover animation
- **Desktop Nav Links** — Home, Products, My Profile with animated underline hover
- **Auth State Aware** — Shows Login/Register buttons when logged out; shows user avatar + name dropdown when logged in
- **User Dropdown** — My Profile and Logout options in a glassmorphism dropdown
- **Mobile Hamburger Menu** — Full-width slide-down mobile menu with all links and auth buttons
- **Active Route Highlights** — Visual underline indicator on the current page link
### 🔻 Footer
- **Brand Column** — Logo, tagline, and social media icon links (Instagram, Twitter, Facebook)
- **Quick Links** — Home, Products, Profile, Login, Register
- **Categories** — Accessories, Clothing, Skincare, Beach Accessories, New Arrivals, Sale
- **Contact Info** — Address, phone number, email address
- **Legal Links** — Privacy Policy, Terms of Service, Cookie Policy
- **Copyright Bar** — Dynamic year + "Made with ❤️ for sun lovers"
---
 
## 🛠️ Tech Stack
 
| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 15.1.0 | Full-stack React framework with App Router |
| **React** | 18.3 | UI component library |
| **TypeScript** | 5.x | Type safety across the entire codebase |
| **Tailwind CSS** | 3.4 | Utility-first CSS framework |
| **DaisyUI** | 4.12 | Tailwind component library + custom `suncart` theme |
| **BetterAuth** | 1.2.7 | Authentication (email/password + Google OAuth) |
| **MongoDB Atlas** | — | Cloud database for user sessions and accounts |
| **Animate.css** | 4.1.1 | Declarative CSS animation library |
| **Lucide React** | 0.469 | Consistent SVG icon set |
| **react-hot-toast** | 2.4.1 | Non-intrusive toast notifications |
| **Framer Motion** | 12.x | Advanced React animation library |
 
---
 
## 📦 NPM Packages
 
```json
{
  "dependencies": {
    "next": "15.1.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "better-auth": "^1.2.7",
    "animate.css": "^4.1.1",
    "react-hot-toast": "^2.4.1",
    "lucide-react": "^0.469.0",
    "mongodb": "^7.2.0",
    "framer-motion": "^12.38.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "tailwindcss": "^3.4.1",
    "daisyui": "^4.12.14",
    "postcss": "^8",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "15.1.0"
  }
}
```
 
### Why these packages?
 
| Package | Why chosen |
|---|---|
| `better-auth` | Modern, lightweight auth with built-in Google OAuth, MongoDB adapter, session management, and `updateUser` — zero boilerplate |
| `animate.css` | Drop-in CSS animations via class names — no JS needed for entrance effects, slide-downs, and fade-ins |
| `framer-motion` | Powers complex spring animations and layout transitions beyond what CSS alone can do |
| `react-hot-toast` | Beautiful, customizable toast notifications that match the dark theme perfectly |
| `lucide-react` | Tree-shakeable SVG icons with consistent stroke width — much lighter than Font Awesome |
| `daisyui` | Custom `suncart` DaisyUI theme centralizes brand colors so every component inherits the gold-on-dark palette automatically |
| `mongodb` | Official driver used by BetterAuth's MongoDB adapter for persisting user accounts and sessions |
 
---
 
## 📁 Project Structure
 
```
suncart/
│
├── app/                              # Next.js App Router root
│   ├── (auth)/                       # Auth route group (shared layout)
│   │   ├── layout.tsx                # Centered card layout with bg glows
│   │   ├── login/
│   │   │   └── page.tsx              # Login page (email + Google)
│   │   └── register/
│   │       └── page.tsx              # Register page (name, email, photo, password)
│   │
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.ts          # BetterAuth catch-all API handler
│   │
│   ├── products/
│   │   ├── page.tsx                  # Products listing (search, filter, sort)
│   │   └── [id]/
│   │       └── page.tsx              # Product detail — protected route
│   │
│   ├── profile/
│   │   ├── page.tsx                  # My Profile — protected route
│   │   └── update/
│   │       └── page.tsx              # Update Profile — protected route
│   │
│   ├── globals.css                   # Global styles, Animate.css import, custom utilities
│   ├── layout.tsx                    # Root layout — Navbar + Footer + Toaster
│   ├── not-found.tsx                 # Custom 404 page
│   └── page.tsx                      # Home page
│
├── components/
│   ├── Navbar.tsx                    # Fixed navbar with scroll effect + mobile menu
│   ├── Footer.tsx                    # 4-column footer
│   └── ProductCard.tsx               # Reusable product card with hover effects
│
├── lib/
│   ├── auth.ts                       # BetterAuth server config (MongoDB adapter)
│   ├── auth-client.ts                # BetterAuth client config (signIn, signOut, useSession)
│   └── products.json                 # Static product catalog (8 items)
│
├── .env.local                        # Secret environment variables (not committed)
├── .env.example                      # Template showing required variable names
├── .gitignore
├── next.config.ts                    # Next.js config (image domains, MongoDB externals)
├── tailwind.config.ts                # Tailwind + DaisyUI custom suncart theme
├── tsconfig.json                     # TypeScript config (@/* → ./* path alias)
├── postcss.config.js
└── README.md
```
 
---
 
## 🗺️ Pages & Routes
 
| Route | Page | Auth Required | Description |
|---|---|---|---|
| `/` | Home | ❌ Public | Hero slider, popular products, care tips, brands |
| `/products` | Products | ❌ Public | Full catalog with search, filter & sort |
| `/products/:id` | Product Detail | ✅ Protected | Full product info; redirects to login if not signed in |
| `/login` | Login | ❌ Public | Email/password + Google OAuth login |
| `/register` | Register | ❌ Public | New account creation form |
| `/profile` | My Profile | ✅ Protected | View account info and avatar |
| `/profile/update` | Update Profile | ✅ Protected | Edit name and profile photo URL |
| `/api/auth/[...all]` | Auth API | — | BetterAuth server handler (GET + POST) |
 
---
 
## 🔐 Authentication Flow
 
```
                    ┌──────────────────────────────────────────┐
                    │            User visits /products/3        │
                    └─────────────────────┬────────────────────┘
                                          │
                              Not logged in?
                          ┌───────────────┴────────────────┐
                         YES                               NO
                          │                                 │
                          ▼                                 ▼
              Redirect to /login          Show full product detail page
              ?redirect=/products/3
                          │
              ┌───────────┴──────────────┐
              │   User logs in via:      │
              │   • Email + Password     │
              │   • Google OAuth         │
              └───────────┬──────────────┘
                          │
                          ▼
              Auth success → redirect back to
              /products/3 (original destination)
```
 
**BetterAuth handles:**
- Password hashing (bcrypt)
- JWT session tokens stored in MongoDB
- Google OAuth callback and account linking
- `updateUser` endpoint for profile editing
- Automatic session refresh
---
 
## 🔑 Environment Variables
 
Create a `.env.local` file in the project root. **Never commit this file.**
 
```env
# MongoDB Atlas connection string
DATABASE_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?appName=Cluster0
 
# Random secret for signing auth tokens (min. 32 characters)
BETTER_AUTH_SECRET=your_random_secret_here
 
# Base URL of your application
BETTER_AUTH_URL=http://localhost:3000
 
# Google OAuth credentials (from Google Cloud Console)
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-your_google_client_secret
 
# Public base URL (used on the client side)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```
 
### How to get each value:
 
| Variable | How to obtain |
|---|---|
| `DATABASE_URI` | [MongoDB Atlas](https://cloud.mongodb.com) → Create cluster → Connect → Drivers → Copy connection string |
| `BETTER_AUTH_SECRET` | Run `openssl rand -base64 32` in your terminal |
| `GOOGLE_CLIENT_ID / SECRET` | [Google Cloud Console](https://console.cloud.google.com) → APIs & Services → Credentials → Create OAuth 2.0 Client ID |
 
> **Google OAuth setup:** Add `http://localhost:3000/api/auth/callback/google` as an Authorized Redirect URI in your Google Cloud Console OAuth config. For production, add your Vercel URL too.
 
---
 
## 🚀 Getting Started
 
### Prerequisites
 
- Node.js **18.x** or higher
- npm / yarn / pnpm
- A [MongoDB Atlas](https://cloud.mongodb.com) account (free tier works)
- A [Google Cloud Console](https://console.cloud.google.com) project with OAuth 2.0 credentials
### Installation
 
```bash
# 1. Clone the repository
git clone https://github.com/yourusername/suncart.git
cd suncart
 
# 2. Install dependencies
npm install
 
# 3. Set up environment variables
cp .env.example .env.local
# Open .env.local and fill in your values
 
# 4. Start the development server
npm run dev
```
 
Open **[http://localhost:3000](http://localhost:3000)** in your browser.
 
### Available Scripts
 
```bash
npm run dev      # Start development server with hot-reload
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint checks
```
 
---
 
## 🌐 Deployment
 
### Deploy to Vercel (Recommended)
 
1. Push your project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. In the **Environment Variables** section, add all variables from your `.env.local`
4. Click **Deploy**
> ✅ Vercel handles all Next.js App Router rewrites automatically — no 404 errors on page refresh from any route.
 
5. After deployment, update your Google OAuth **Authorized Redirect URI** to include:
   ```
   https://your-app.vercel.app/api/auth/callback/google
   ```
6. Update `BETTER_AUTH_URL` and `NEXT_PUBLIC_APP_URL` in your Vercel environment variables to your live domain.
---
 
 
---
 
 
---
 
## 📄 License
 
Distributed under the MIT License.
 
---
 
<div align="center">
Made with ☀️ and ❤️ &nbsp;·&nbsp; Built for sun lovers everywhere
 
**[⬆ Back to Top](#️-suncart)**
 
</div>
