import "./App.css";
import { Fragment } from "react";
import Searchbar from "./components/Searchbar";
import Card from "./components/Cards";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <Fragment>
      <Navbar/>
      <Searchbar />
      <Card />
    </Fragment>
  );
}

export default App;
