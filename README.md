This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:
🛒 Restan Goods

A modern web application built using Next.js, designed to display and manage goods in a clean and simple interface. This project is structured with the Next.js App Router and serves as a foundation for building an e-commerce-style or goods-listing frontend.

🚀 Features

⚡ Next.js App Router architecture

🎨 Clean UI with reusable components

📁 Organized folder structure for easy scaling

🔤 Optimized font loading with next/font (Geist)

♻️ Hot reload support during development

🔧 Easy to extend for backend or API integration

📦 Tech Stack
To keep the UI modular, each feature and layout section is separated into its own component. Here’s how the structure is organized:

1️⃣ app/ – Main Pages & Layout

The app folder handles routing, layouts, and pages.

Each route has its own folder (like app/page.js), keeping navigation simple.

The root layout contains global UI structure such as:

Header

Footer

Global styling

Metadata

2️⃣ components/ – Reusable UI Blocks

This folder contains all the shared components used across multiple pages.
Examples include:

Navbar – Top navigation bar

Footer – Bottom site footer

ItemCard – Displays a single product/goods item

ItemList – Renders multiple items using ItemCard

Button / Input – Reusable form and UI elements

Banner / Hero – Page header visuals

SectionWrapper – Reusable layout wrapper for spacing

Each component is kept small so it does one job well.

3️⃣ Styling Layer

Depending on your setup (Tailwind / CSS modules):

Tailwind CSS:
All components include utility classes directly inside JSX for clean styling.

CSS Modules (if used):
Each component gets its own stylesheet like:

components/ItemCard.module.css


This avoids clutter and prevents CSS conflicts.

4️⃣ Public Assets

Static files (images/icons) are stored in:

public/


and imported inside components when needed.

🧩 Why This Structure?

Splitting components like this gives you:

🔄 Reusability
No need to rewrite UI for different pages.

🧹 Cleaner Code
Each file has one responsibility.

🚀 Easy Scaling
More pages? More features? Just add new components.

🧪 Better Testing & Debugging
Smaller components are easier to test individually.
Next.js 14+

React

JavaScript

Tailwind CSS (if you added it — remove if not used)

Vercel Fonts (Geist)
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
/
├── app/               # App Router pages & routes
├── components/        # Reusable UI components
├── public/            # Static files
├── styles/            # Global styles (if any)
│
├── package.json
├── next.config.mjs
└── README.md


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
"# Restan_Goods" 
