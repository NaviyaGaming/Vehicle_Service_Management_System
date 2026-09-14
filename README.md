# 🚗 Torque Point — Vehicle Service Center Management System

Torque Point is a modern, web-based Vehicle Service Center Management System developed as a group assignment project. It is designed to streamline daily shop operations, offering a centralized command center for tracking vehicle repairs, managing mechanics, and providing predictive maintenance insights.

This repository contains the frontend implementation of the system, featuring a secure authentication flow, animated loading sequences, and a modern, responsive user interface.

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Assignment Scope](#-assignment-scope)
- [Team Members](#-team-members)

## 📖 Project Overview

Managing a vehicle service center involves juggling multiple tasks: tracking incoming vehicles, assigning jobs to mechanics, monitoring repair statuses, and keeping customers updated. Torque Point aims to digitize and simplify this process.

For this assignment, we designed and developed the foundational frontend architecture, focusing on the user authentication system, UI/UX design, and seamless navigation flows.

## ✨ Key Features

- 🔐 **Secure Authentication Portal** — a clean, split-panel login system supporting both traditional Email/Password and Google OAuth 2.0 (Google Identity Services).
- ⚡ **Animated Loading Screen** — a standalone `loading.html` page that simulates system initialization with a dynamic progress bar and smooth fade-out transitions.
- 📊 **Dashboard Telemetry (UI)** — the login screen features a telemetry panel displaying key metrics (vehicles managed, uptime SLA, average response time) with animated counters.
- 📱 **Fully Responsive** — the interface adapts flawlessly to desktops, tablets, and mobile devices using modern CSS Grid and Flexbox.
- 🎨 **Modern UI/UX** — custom CSS variables, smooth keyframe animations, toast notifications, and a dark/light hybrid theme designed for high readability.

## 🛠️ Tech Stack

This project was built using core frontend web technologies without relying on heavy UI frameworks, ensuring a lightweight and fast user experience.

- **HTML5** — semantic structure and accessibility.
- **CSS3** — custom properties (variables), Flexbox, CSS Grid, and keyframe animations.
- **Vanilla JavaScript (ES6+)** — DOM manipulation, form validation, and integration of Google Identity Services.
- **Font Awesome** — scalable vector icons.
- **Google Fonts** — Space Grotesk and DM Sans for modern typography.

## 📂 Project Structure

```
torque-point/
│
├── loading.html       # Standalone animated loading/redirect page
├── index.html         # Main login/authentication page
├── style.css          # Core stylesheet (layout, colors, animations)
├── script.js          # Client-side logic (Auth, UI toggles, counters)
└── README.md          # Project documentation
```

## 🚀 Getting Started

To run this project locally on your machine, follow these simple steps:

### Prerequisites

You only need a modern web browser (e.g., Google Chrome, Firefox, Edge). No additional software installation is required.

### Installation & Usage

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/torque-point.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd torque-point
   ```

3. **Launch the application**
   - Open `loading.html` in your browser to view the intro animation, which automatically redirects to the login page.
   - Alternatively, open `index.html` directly to view the login screen immediately.

> **Note:** To test the Google Sign-In button, you'll need to replace the `client_id` in `script.js` with a valid Google Cloud Console OAuth Client ID.

## 🎯 Assignment Scope

As part of this assignment, our primary focus was on:

- **UI/UX Design** — creating an intuitive, accessible, and visually appealing interface.
- **Frontend Development** — implementing responsive layouts using CSS Grid and Flexbox.
- **Client-Side Scripting** — handling form validations, UI state changes (loading spinners, password toggles), and integrating third-party services (Google Auth).
- **User Flow** — ensuring smooth transitions between the loading phase and the authentication portal.

*Future scope for a complete system would include backend database integration for managing actual vehicle records and service center staff.*

## 👥 Team Members

This project was collaboratively developed by:

| Name | Student ID | Role / Contribution |
|------|------------|----------------------|
| [Member 1 Name] | [Student ID] | [Role/Contribution] |
| [Member 2 Name] | [Student ID] | [Role/Contribution] |
| [Member 3 Name] | [Student ID] | [Role/Contribution] |
| [Member 4 Name] | [Student ID] | [Role/Contribution] |

*Replace the bracketed placeholders with your actual team details.*

---

<sub>© 2024 Torque Point — Academic Project</sub>
