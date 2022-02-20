import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert.js";
import About from "./components/About.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Link, useRouteMatch, useParams

function App() {
  // these are for darkMode.
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("DarkMode has been enabled.", "success");
      document.title = "TextUtils - Home - DarkMode";
    } else {
      setMode("light");
      showAlert("LightMode has been enabled.", "success");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Home - LightMode";
    } // mode === "light" ? setMode("dark") : setMode("light");
  };

  //these are for alerts.
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />}></Route>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
