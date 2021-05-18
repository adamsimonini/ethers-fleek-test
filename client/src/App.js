import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import List from './components/List'
// import abi from './data/abi.json'

function App() {
  
  // const [workshops, setWorkshops] = React.useState([])

  return (
    <div className="App">
      <Navbar />
      <List />
    </div>
  );
}

export default App;
