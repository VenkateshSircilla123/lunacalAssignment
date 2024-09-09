import { useState } from "react";
import "./App.css";
import LeftComponent from "./components/LeftComponent";
import RightComponent from "./components/RightComponent";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[100vw] flex mt-5">
      <LeftComponent />
      <RightComponent />
    </div>
  );
}

export default App;
