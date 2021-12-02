import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title="NumFinding" aboutus="About"/>
      <div className="container my-3">
      <TextForm heading="Enter The Text To Analyse Below"/>
      </div>
    </>
  );
}

export default App;
