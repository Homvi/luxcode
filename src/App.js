import Landing from "./pages/Landing";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
       
      </Helmet>
      <div className="p-5 bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900 min-h-screen">
        <Landing />
      </div>
    </>
  );
}

export default App;
