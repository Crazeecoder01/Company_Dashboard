# Company Dashboard

A dashboard application built using TypeScript, React, and TailwindCSS. This project provides a user-friendly interface for managing employees, jobs, and payrolls.

---

## 🚀 Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/company-dashboard.git
   cd company-dashboard
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Build the TypeScript code:**

   ```bash
   npm run build
   ```

4. **Run the app (for development):**

   ```bash
   npm run dev
   ```

---

## 🛠️ Project Structure

The project is organized as follows:

```
frontend-intern/
├── public/                # Static assets (images, icons, etc.)
├── src/                   # Source code
│   ├── assets/            # Additional assets (e.g., SVGs)
│   ├── components/        # Reusable React components
│   ├── context/           # Context API for global state management
│   ├── data/              # Static JSON data
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page-level components
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── .gitignore             # Git ignore rules
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

---

## 🧠 Approach

1. **Component-Based Architecture:**
   - The application is built using reusable React components, such as `Navbar`, `SideBar`, and `EmployeeTable`, to ensure modularity and scalability.

2. **State Management:**
   - Context API is used for managing global states like user authentication (`UserContext`) and sidebar visibility (`SidebarContext`).

3. **Styling:**
   - TailwindCSS is used for styling, enabling rapid UI development with utility-first CSS classes.

4. **Routing:**
   - React Router is used for navigation between pages like Login, Dashboard, and Employee Management.

5. **Data Handling:**
   - Static JSON files are used to simulate backend data for employees and other entities.

6. **Responsive Design:**
   - The layout is designed to be responsive, ensuring compatibility across different screen sizes.

---

## 📂 Key Features

- **Login Authentication:** User login functionality with local storage for session persistence.
- **Employee Management:** View and manage employee details in a tabular format.
- **Dashboard:** Overview of messages, jobs, candidates, and payrolls.
- **Sidebar Navigation:** Easy navigation between different sections of the application.
- **Modal Popups:** Display detailed information in modals for better user experience.

---

## This project is deployed using Vercel for fast and reliable hosting.

### 🔁 Fix for 404 Error on Page Reloads

When using client-side routing (e.g., React Router), you might encounter a 404 error on page reloads (e.g., `/dashboard`). This happens because the hosting platform (e.g., Vercel) looks for a static file at the requested route, which doesn't exist.

#### ✅ Solution:

To resolve this issue, create a `vercel.json` file in the root of your project with the following content:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

This configuration ensures that all routes are redirected to the root `index.html`, allowing React Router to handle the routing.

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details.

