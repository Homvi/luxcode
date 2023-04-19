import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Quote from "./pages/Quote";
import PrivacyPolicy from "./pages/PrivacyPolicy";


function App() {
  return (
    <>
      <div className=" bg-cover svg-bcg min-h-screen relative">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
