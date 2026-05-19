import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./app/page";
import AboutPage from "./app/about/page";
import ActivitiesPage from "./app/activities/page";
import SermonsPage from "./app/sermons/page";
import GalleryPage from "./app/gallery/page";
import ContactPage from "./app/contact/page";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/sermons" element={<SermonsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
