import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PresentationsPage from "./PresentationsPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PresentationsPage />
  </StrictMode>,
);
