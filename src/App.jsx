import { HomePage } from "./pages/home/HomePage";

import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { ServicesPage } from "./pages/services/ServicesPage";
import { WorkPage } from "./pages/work/WorkPage";
import { AboutPage } from "./pages/about/AboutPage";
import { ContactPage } from "./pages/contact/ContactPage";


function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
