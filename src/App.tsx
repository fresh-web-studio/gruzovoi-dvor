import { useState } from "react";

import { HomePage } from "./pages/HomePage";
import { ContactsPage } from "./pages/ContactsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";

import "./styles/globals.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "services" | "about" | "contacts">("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page as typeof currentPage);
  };

  return (
    <>
      {currentPage === "home" && <HomePage onNavigate={handleNavigate} />}
      {currentPage === "services" && <ServicesPage onNavigate={handleNavigate} />}
      {currentPage === "about" && <AboutPage onNavigate={handleNavigate} />}
      {currentPage === "contacts" && <ContactsPage onNavigate={handleNavigate} />}
    </>
  );
}
