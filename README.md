# Bow Sewing Centre Ltd - Professional Web Application

A modern, responsive multi-site web application built for a London-based tailoring and school uniform business. This project demonstrates a clean architecture using **React 19**, **Tailwind CSS**, and **React Router 7**.

## 🚀 Live Demo
[Insert your Vercel Link Here]

## 🛠️ Tech Stack & Features
- **Frontend:** React 19 (Functional Components & Hooks)
- **Styling:** Tailwind CSS (Utility-first design system)
- **Routing:** React Router 7 (Hash-based routing for static hosting compatibility)
- **Architecture:** 
  - **Modular Components:** Separate mini-sites for "Uniforms" and "Services" using shared UI components.
  - **Data-Driven:** Centralized configuration in `constants.ts` for easy maintenance.
  - **Responsive Design:** Mobile-first approach for parents and customers on the go.

## 📂 Project Structure
- `/components`: Reusable UI elements (Buttons, Layouts, Navbars).
  - `/uniforms`: Context-specific components for the School Uniform shop.
  - `/services`: Context-specific components for Tailoring/Alterations.
- `types.ts`: Strongly typed interfaces for products and services.
- `constants.ts`: The "Source of Truth" for all business data.

## 📈 Engineering Decisions
- **Mini-Site Split:** I chose to split the site into two distinct visual identities (Navy for Uniforms, Earthy Green for Services) to provide clear user pathways based on intent.
- **Instagram Integration:** To optimize conversion for a small business, I directed the "Order" flow to Instagram DM, meeting the client's current operational workflow.
- **Vercel CI/CD:** Integrated with GitHub for automated deployments and preview environments.

## 🖼️ How to contribute/Update
1. **Clone the repo:** `git clone ...`
2. **Install dependencies:** `npm install`
3. **Run locally:** `npm start`
4. **Update Content:** Edit `constants.ts` to change prices, schools, or services.

---
*Developed as a professional engineering project to demonstrate modern frontend best practices.*
