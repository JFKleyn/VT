import { HomePage } from "./pages/home/HomePage";

import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";


function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
