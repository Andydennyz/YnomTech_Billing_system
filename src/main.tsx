/**
 * -----------------------------------------------------------------------------
 * Application Entry Point
 * -----------------------------------------------------------------------------
 *
 * This is where the React application starts.
 *
 * Responsibilities:
 * - Render the root React application
 * - Import global styles
 * - Mount the App component
 *
 * Future additions:
 * - React Router
 * - Convex Provider
 * - Authentication Provider
 * - Theme Provider
 * -----------------------------------------------------------------------------
 */

import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/globals.css";
import "./styles/theme.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);