import "./App.css";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {

  return (
    <div className="App">
      <Navbar   />
      <MainRoutes />
      <Footer/>
    </div>
  );
}

export default App;
