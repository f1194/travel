import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import FooterComponent from "./Components/FooterComponent";

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import TeamPage from "./Pages/TeamPage";

function App() {

  return (
  <div>
    <NavbarComponent />

    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/about" Component={AboutPage}/>
      <Route path="/service" Component={ServicePage}/>
      <Route path="/team" Component={TeamPage}/>
    </Routes>

    <FooterComponent />
  </div>
  );
  
}

export default App
