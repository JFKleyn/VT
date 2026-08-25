import { HomePage } from "./pages/home/HomePage";

import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { AboutPage } from "./pages/about/AboutPage";


function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
