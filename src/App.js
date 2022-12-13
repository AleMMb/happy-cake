import "bootstrap/dist/css/bootstrap.min.css"
import Nabvar from "./components/Navbar";
import FormUser from "./views/FormUser";
import Home from "./views/Home";


function App() {
  return (
    <div className="">
      <Nabvar />
      <FormUser />
      <Home />
    </div>
  );
}

export default App;
