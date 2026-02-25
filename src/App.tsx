import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { ContactsPage } from "./pages/ContactsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { TermsPage } from "./pages/TermsPage";
import { DvigateliPage } from "./pages/DvigateliPage";

import "./styles/globals.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/uslugi" element={<ServicesPage />} />
      <Route path="/o-nas" element={<AboutPage />} />
      <Route path="/kontakty" element={<ContactsPage />} />
      <Route path="/usloviya" element={<TermsPage />} />
      <Route path="/dvigateli" element={<DvigateliPage />} />
    </Routes>
  );
}
