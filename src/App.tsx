import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { ContactsPage } from "./pages/ContactsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";

import "./styles/globals.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/uslugi" element={<ServicesPage />} />
      <Route path="/o-nas" element={<AboutPage />} />
      <Route path="/kontakty" element={<ContactsPage />} />
    </Routes>
  );
}
