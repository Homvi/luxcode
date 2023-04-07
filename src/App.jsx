import Landing from "./pages/Landing";
import pc from "./assets/pc.png"

function App() {
  return (
    <>
      <div className="p-8 bg-cover  svg-bcg min-h-screen relative">
        <img src={pc}  alt="pc" className="absolute right-0 bottom-0 h-[90%] hidden lg:block"/>
        <Landing />
      </div>
    </>
  );
}

export default App;
