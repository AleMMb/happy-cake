
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Nabvar from "./components/Navbar";
import Home from "./views/Home";
import FormUser from "./views/FormUser";
import NotFound from "./views/NotFound";




function App() {
  return (
    <BrowserRouter>
      <Nabvar />
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Contacto" element={<FormUser/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
