import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideBar, SideBarMobile } from "./components";
import { data } from "./data";
import Home from "./pages/Home";

function App() {


  return (
    <BrowserRouter>
        <SideBar />
        <SideBarMobile />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
