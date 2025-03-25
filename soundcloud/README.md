# 🎵 SoundCloud Web App  

## 📌 Overview  
This project is a **SoundCloud-inspired web app** built with **Next.js**. The goal was to create a user-friendly interface that allows users to explore music, sign in, and interact with content seamlessly.  

### 🌟 Key Features:  
- **Image & text carousel** with auto-rotation  
- **Smooth slide-in authentication modal** that dims the background  
- **A clean and structured UI** built with Tailwind CSS  
- **Reusable components** for scalability  

## 🛠️ Tech Stack  
This project is built using modern web technologies:  

| **Technology**  | **Purpose** |
|---------------|------------|
| **Next.js**   | Server-side rendering & performance |
| **React**     | Component-based UI library |
| **Tailwind CSS** | Utility-first styling framework |
| **@heroicons/react** | Icon library for a better UI |

## 📦 Installed Dependencies  
The following third-party dependencies were installed for this project:  

```bash
npm install next react react-dom tailwindcss @heroicons/react
```
📂 Project Structure
The project is organized into reusable components to keep things modular and scalable.
```
src/
│── app/
│   │── layout.js          # Main layout
│   │── page.js            # Homepage
│── components/
│   │── layout/
│   │   │── MainLayout.jsx # Main page structure
│   │── ui/
│   │   │── Carousel.jsx   # Rotating banner with images & text
│   │   │── AuthModal.jsx  # Sign-in/sign-up modal
│   │   │── Footer.jsx     # Call-to-action section
│   │   │── Header.jsx     # Navigation bar
│   │   │── SearchBar.jsx  # Search input component
│   │   │── TrendingTracks.jsx # Displays popular tracks
│   │   │── PromoSection.jsx # Promotional content
│── styles/
│   │── globals.css        # Global styles
```
## 🔧 Component Breakdown
### 🏠 MainLayout.jsx – Page Structure
Why this approach?

- Keeps the entire layout modular and reusable.

- Contains all main components in a centralized place.

- Helps in consistent structuring across multiple pages.
```
Components Used Inside:
✔ Carousel.jsx (Hero Section)
✔ SearchBar.jsx (Music search)
✔ TrendingTracks.jsx (Popular tracks display)
✔ PromoSection.jsx (Promotions & highlights)
✔ Footer.jsx (Call-to-action)
```

### 🎠 Carousel.jsx – Dynamic Image & Text Rotator
Why this approach?

- Automatically rotates every 5 seconds for engagement.

- Uses fade transition between slides for a smooth effect.

- Displays auth buttons (Sign In / Create Account) in the top-right corner.

- Navigation dots for manual selection.

### 🔐 AuthModal.jsx – Slide-in Authentication Modal
Why this approach?

- The modal slides down when triggered, making it feel seamless.

- Background gets dimmed (bg-opacity-80) for focus.

- No distractions – buttons are hidden when the modal is active.

- Clicking “✕” smoothly hides the modal.

How it works:

- User clicks "Create Account" → AuthModal slides down.

- Background becomes semi-transparent.

- User enters details and submits (future: integrate Firebase/Auth API).

- Clicking "✕" closes the modal, returning to the main page.

### 📢 Footer.jsx – Call-to-Action Section
- Encourages users to sign up and engage with the platform.

- "Create Account" and "Sign In" trigger the AuthModal.

- Uses simple and mobile-friendly layout.

### 🔎 SearchBar.jsx – Music Search Component
Why this approach?

- Provides quick access to searching music.

- Keeps the design minimal & accessible.

- Future enhancement: Live search suggestions.

### 📈 TrendingTracks.jsx – Displays Popular Music
Why this approach?

- Shows 12 trending tracks dynamically.

- Includes song images, names, and artist details.

- Layout adjusts to different screen sizes.

### 🎤 PromoSection.jsx – Promotional Content
Why this approach?

- Highlights new artist releases and featured content.

- Provides a visually engaging section.

## 📜 UI Flow Diagram
```
[Header] ────────────┐  
   │                │  
[Carousel]         [AuthModal]   
   │                │  
[SearchBar]      (Appears on button click)  
   │                │  
[TrendingTracks]  ─────── [PromoSection]  
   │                │  
[Footer]  <─────── Close button hides modal
```  
## 📌 Future Improvements
🔹 Add real authentication (Google, Facebook, Apple login).

🔹 Integrate SoundCloud API for dynamic content.

🔹 Enhance animations using Framer Motion.