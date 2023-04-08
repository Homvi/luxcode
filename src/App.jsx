import Landing from "./pages/Landing";
import pc from "./assets/pc.png";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";

function App() {
  const [imageLoading, setImageLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingIsNecessary, setLoadingIsNecessary] = useState(true);

  const [arrayIndex, setArrayIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [progressArray, setProgressArray] = useState([0, 81, 87, 90]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (arrayIndex < progressArray.length && loadingIsNecessary) {
        setProgress(progressArray[arrayIndex]);
        setArrayIndex(arrayIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [arrayIndex, progressArray, loadingIsNecessary]);

  const handleLoaded = () => {
    setLoadingIsNecessary(false);
    setProgress(100);
    setTimeout(() => {
      setImageLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="p-8 bg-cover  svg-bcg min-h-screen relative">
        <img
          src={pc}
          alt="pc"
          onLoad={handleLoaded}
          className="absolute right-0 bottom-0 h-[90%] hidden lg:block"
        />
        <Routes>
          <Route
            path="/"
            element={<Landing loading={imageLoading} progress={progress} />}
          />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
