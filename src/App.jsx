import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Dashboard from "./components/ui/Dashboard";

AOS.init({
  duration: 300,
  easing: "ease-in-quad",

});

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;