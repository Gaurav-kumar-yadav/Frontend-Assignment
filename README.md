# 🌐 Forescribe – Signup Page (Next.js + TypeScript)

A responsive, modern signup page built using **Next.js 14**, **TypeScript**, and **Tailwind CSS**.  
The project features a clean gradient background, a blurred glassmorphism signup card,  
interactive buttons with animations, and a responsive navbar with routing.

---

## 🚀 Live Demo
🔗 **[View Live on Vercel](https://frontend-assig-git-381479-gaurav-kumar-yadavs-projects-1db4caf8.vercel.app/)**

---

## 🧩 Features

✅ Responsive full-screen gradient background  
✅ Glassmorphism login card with Google and Microsoft signup buttons  
✅ Smooth hover animations and transitions  
✅ Navbar with working routes (`Home`, `About`, `Services`, `Contact`)  
✅ Built using **Next.js App Router** with **TypeScript**  
✅ Fully deployed and optimized with **Vercel**

---

## 🏗️ Directory Structure

                                    Frontend Assignment/
                                    │
                                    ├── .next/                        # (auto-generated build folder)
                                    ├── node_modules/                 # installed npm dependencies
                                    │
                                    ├── public/                       # public static assets
                                    │   └── assets/
                                    │       ├── Asset2.png
                                    │       ├── Group39705.png
                                    │       ├── google-icon.png
                                    │       ├── Group.svg
                                    │       ├── 60pxF_8b3dff_v2.png
                                    │
                                    ├── src/
                                    │   ├── app/
                                    │   │   ├── layout.tsx            # Global layout (HTML structure)
                                    │   │   ├── page.tsx              # Home page (main)
                                    │   │   │
                                    │   │   ├── about/                # /about route
                                    │   │   │   └── page.tsx
                                    │   │   │
                                    │   │   ├── services/             # /services route
                                    │   │   │   └── page.tsx
                                    │   │   │
                                    │   │   └── contact/              # /contact route
                                    │   │       └── page.tsx
                                    │   │
                                    │   └── components/               # Reusable React components
                                    │       └── Signup.tsx
                                    │
                                    ├── .eslintrc.json                # ESLint config (linting rules)
                                    ├── .gitignore                    # Git ignored files
                                    ├── next-env.d.ts                 # TypeScript Next.js types
                                    ├── next.config.mjs               # Next.js configuration file
                                    ├── package-lock.json             # Locked dependency versions
                                    ├── package.json                  # ✅ Dependencies & scripts
                                    ├── postcss.config.js             # PostCSS setup (for Tailwind)
                                    ├── tailwind.config.ts            # Tailwind theme & extensions
                                    ├── tsconfig.json                 # TypeScript compiler configuration
                                    └── README.md                     # Project documentation




---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/Gaurav-kumar-yadav/Frontend-Assignment.git

# 2. Navigate to the project folder
cd Frontend Assignment

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev


Assumptions Made

The user authentication (Google/Microsoft) is represented as static UI (no backend).

The gradient background and blur effects were optimized for modern browsers.

All assets are assumed to be stored inside /public/assets.

✨ Additional Improvements

Added hover glow and animation to buttons for modern UI effect.

Fully responsive layout using Tailwind CSS breakpoints.

Added routing for About, Services, and Contact pages.

Clean component-based structure with reusable <Signup /> component.

Deployed on Vercel with production-ready configuration.

🛠️ Technologies Used

Next.js 14 (App Router)

TypeScript

Tailwind CSS

React 18

Vercel (for deployment)


