import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ServicesPage } from "./pages/Services";
import { PropertiesPage } from "./pages/Properties";
import { VehiclesPage } from "./pages/Vehicles";
import { ToursPage } from "./pages/Tours";
import { ConstructionPage } from "./pages/Construction";
import { ConsultationPage } from "./pages/Consultation";
import { ContactPage } from "./pages/Contact";
import { AdminPage } from "./pages/Admin";
import { GeneralSuppliersPage } from "./pages/GeneralSuppliers";
import { AgriculturePage } from "./pages/Agriculture";
import { ImportExportPage } from "./pages/ImportExport";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/vehicles" element={<VehiclesPage />} />
            <Route path="/tours" element={<ToursPage />} />
            <Route path="/construction" element={<ConstructionPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/general-suppliers" element={<GeneralSuppliersPage />} />
            <Route path="/agriculture" element={<AgriculturePage />} />
            <Route path="/import-export" element={<ImportExportPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
