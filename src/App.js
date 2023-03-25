import Landing from "./pages/Landing";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Luxcode</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#3d3d3d"/>
        <meta name="theme-color" content="#000000"/>
      </Helmet>
      <div className="p-5 bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900 min-h-screen">
        <Landing />
      </div>
    </>
  );
}

export default App;
