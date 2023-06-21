
import './App.css';
import { Fragment } from 'react';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';

function App() {
  return (
   <Fragment>
    <Navbar/>
    <Searchbar/>
   </Fragment>
  );
}

export default App;
