import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Quote from "./pages/Quote";


function App() {
  return (
    <>
      <div className=" bg-cover svg-bcg min-h-screen relative">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
