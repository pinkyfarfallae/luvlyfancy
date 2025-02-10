import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Disclaimer from "./pages/Disclaimer";

function App() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    const url = window.location.href;
    console.log(url);

    if (url) {
      const l = url.split("/");
      console.log(l);
      setLocation(l[4]);
    }
  }, []);

  return (
    <div className="App">
      <div className="app-page">{location === "" && <Disclaimer />}</div>
    </div>
  );
}

export default App;
