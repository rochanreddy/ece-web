

# Lalitya Technologies Website Integration Plan

## Overview
Build a complete, professional landing page for **Lalitya Technologies** — a company offering industrial live projects for engineering students (ECE, EEE, MECH). The site will be a single-page marketing website with smooth animations and a contact form.

## Pages & Sections

### 1. Navigation Bar
- Sticky header with logo ("Lalitya Technologies")
- Links: Home, Projects, Tools, Contact, Enroll Now (CTA button)
- Mobile hamburger menu with animated overlay
- Background blur effect on scroll

### 2. Hero Section
- Bold headline: "Industrial Live Projects for Real Careers"
- Subtitle targeting ECE, EEE & MECH students
- Two CTA buttons: "Explore Projects" and "Contact Us"
- Animated gradient background with decorative blurred circles
- Scroll-based fade animation

### 3. About / Features Section
- Heading: "Bridging Academia & Industry"
- 4 feature cards with icons:
  - Industry-Oriented Projects
  - Real-Time Implementation
  - R&D & IEEE Projects
  - Placement Guidance
- Staggered entrance animations

### 4. Projects Section
- Tabbed interface with 7 categories: VLSI/RTL Design, PCB Design, Embedded & IoT, Communication Systems, Robotics & AI/ML, Final Year Projects, IEEE/Non-IEEE
- Project cards showing title, description, tools used (as badges), duration
- "Enquire Now" button per project
- Animated card reveals

### 5. Tools & Platforms Section
- Grid of 12 industry tools (Cadence, Synopsys, Verilog, Vivado, KiCad, MATLAB, Python, Arduino, etc.)
- Each shown with emoji icon and name
- Hover animations

### 6. Why Choose Us Section
- 4 differentiation cards:
  - Live Industrial Mentorship
  - Hardware + Software Integration
  - Publication Guidance
  - Career-Focused Training
- Gradient background styling

### 7. Contact Section
- Contact form with fields: Name, Email, Phone, Department (dropdown), Project Category (dropdown), Message
- Contact info sidebar: Phone numbers, Email addresses, Location
- Form validation and submission handling

### 8. Footer
- Company branding and social links (GitHub, LinkedIn, Twitter)

## Design & Styling
- Primary brand color: **#5A7ACD** (blue)
- Accent/CTA color: **#FEB05D** (warm orange/amber)
- Dark text: **#2B2A2A**
- Light backgrounds with subtle gradients
- Rounded corners (xl radius) throughout
- Smooth scroll-triggered animations using **framer-motion**

## Technical Notes
- **framer-motion** will be added for scroll and entrance animations
- All data (projects, tools, features) stored as static arrays — no backend needed
- Fully responsive design with mobile-first approach
- Contact form logs to console (can be extended to a backend later)

