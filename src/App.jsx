import Landing from "./pages/Landing";
import pc from "./assets/pc.png";
import { useEffect, useState } from "react";

function App() {
  const [imageLoading, setImageLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const [arrayIndex, setArrayIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [progressArray, setProgressArray] = useState([0, 81, 87, 90]);

  
  useEffect(() => {
    const interval = setInterval(() => {
      if (arrayIndex < progressArray.length) {
        setProgress(progressArray[arrayIndex]);
        setArrayIndex(arrayIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [arrayIndex, progressArray]);

  const handleLoaded = () => {
    if (progress === 90) {
      setProgress(100);
    }
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
        <Landing loading={imageLoading} progress={progress} />
      </div>
    </>
  );
}

export default App;
